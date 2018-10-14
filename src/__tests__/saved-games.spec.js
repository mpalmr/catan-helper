import createUuid from 'uuid/v4';
import savedGames from '../saved-games';

jest.mock('uuid/v4');

describe('savedGames', () => {
	const LS_KEY = 'games';
	jest.spyOn(Date, 'now').mockImplementation(() => new Date('2010-01-01').getTime());

	afterEach(() => {
		localStorage.clear();
	});

	test('new()', () => {
		createUuid
			.mockReturnValueOnce('mockId1')
			.mockReturnValueOnce('mockId2');

		const results = [{
			id: 'mockId1',
			settlements: [],
			created: new Date(Date.now()),
			modified: new Date(Date.now()),
		}];
		expect(savedGames.new()).toEqual(results[0]);
		expect(JSON.parse(localStorage.getItem(LS_KEY)))
			.toEqual(results.map(({ created, modified, ...game }) => ({
				...game,
				created: created.toISOString(),
				modified: modified.toISOString(),
			})));

		results.push({
			id: 'mockId2',
			settlements: [],
			created: new Date(Date.now()),
			modified: new Date(Date.now()),
		});
		expect(savedGames.new()).toEqual(results[1]);
		expect(JSON.parse(localStorage.getItem(LS_KEY)))
			.toEqual(results.map(({ created, modified, ...game }) => ({
				...game,
				created: created.toISOString(),
				modified: modified.toISOString(),
			})));
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

		test('sets "modified" on matching game', () => {
			jest.spyOn(Date, 'now').mockImplementation(() => new Date('2010-01-01').getTime());
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
});
