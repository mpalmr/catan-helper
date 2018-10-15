import createUuid from 'uuid/v4';
import savedGames from '../saved-games';

jest.mock('uuid/v4');

const LS_KEY = 'games';

beforeEach(() => {
	jest.spyOn(Date, 'now').mockImplementation(() => new Date('2010-01-01').getTime());
});

afterEach(() => {
	jest.resetAllMocks();
	localStorage.clear();
});

afterAll(() => {
	jest.restoreAllMocks();
});

test('getAll()', () => {
	const expected = [
		{
			id: 'id1',
			name: 'name1',
			settlements: [],
			created: new Date(),
			modified: new Date(),
		},
		{
			id: 'id2',
			name: 'name2',
			settlements: [],
			created: new Date(),
			modified: new Date(),
		},
	];
	expect(localStorage.getItem(LS_KEY)).toBeNull();
	expect(savedGames.getAll()).toEqual([]);
	localStorage.setItem(LS_KEY, JSON.stringify(expected));
	expect(savedGames.getAll()).toEqual(expected);
});

test('new(name)', () => {
	const expected = {
		id: 'id1',
		name: 'name1',
		settlements: [],
		created: new Date(Date.now()),
		modified: new Date(Date.now()),
	};
	createUuid.mockReturnValueOnce('id1');
	expect(savedGames.new).toThrow('Game requires a name');
	expect(savedGames.new('name1')).toEqual(expected);
	expect(JSON.parse(localStorage.getItem(LS_KEY))).toEqual([{
		...expected,
		created: expected.created.toJSON(),
		modified: expected.modified.toJSON(),
	}]);
});

describe('continue(id)', () => {
	test('throws when game does not exist', () => {
		expect(() => savedGames.continue('mockId2')).toThrow('Game does not exist');

		localStorage.setItem(LS_KEY, JSON.stringify([{
			id: 'mockId1',
			settlements: [],
			created: new Date(),
			modified: new Date(),
		}]));
		expect(() => savedGames.continue('mockId2')).toThrow('Game does not exist');
	});

	test('sets "modified" on matching game and sets to localStorage', () => {
		localStorage.setItem(LS_KEY, JSON.stringify([
			{
				id: 'mockId1',
				settlements: [],
				created: new Date(Date.now()),
				modified: new Date(Date.now()),
			},
			{
				id: 'mockId2',
				settlements: [],
				created: new Date(Date.now()),
				modified: new Date(Date.now()),
			},
		]));

		const existingNow = Date.now();
		jest.spyOn(Date, 'now').mockImplementation(() => new Date('2010-02-01').getTime());

		expect(savedGames.continue('mockId2')).toEqual({
			id: 'mockId2',
			settlements: [],
			created: new Date(existingNow),
			modified: new Date(Date.now()),
		});

		expect(JSON.parse(localStorage.getItem(LS_KEY))).toEqual([
			{
				id: 'mockId1',
				settlements: [],
				created: new Date(existingNow).toISOString(),
				modified: new Date(existingNow).toISOString(),
			},
			{
				id: 'mockId2',
				settlements: [],
				created: new Date(existingNow).toISOString(),
				modified: new Date(Date.now()).toISOString(),
			},
		]);
	});
});
