import { shallowMount } from '@vue/test-utils';
import VueRouter from 'vue-router';
import NewGameForm from '../NewGameForm.vue';

const LS_KEY = 'games';
let wrapper;

beforeEach(() => {
	wrapper = shallowMount(NewGameForm, { router: new VueRouter() });
});

afterEach(() => {
	localStorage.clear();
});

describe('methods', () => {
	test('handleSubmit()', () => {
		const mockRouterPush = jest.spyOn(wrapper.vm.$router, 'push');
		wrapper.vm.handleSubmit();
		expect(mockRouterPush).not.toHaveBeenCalled();

		wrapper.setData({ name: 'ey' });
		wrapper.vm.handleSubmit();
		const games = JSON.parse(localStorage.getItem(LS_KEY));
		expect(games).toHaveLength(1);
		expect(games[0].name).toEqual('ey');
		expect(mockRouterPush).toHaveBeenCalledWith(`/game/${games[0].id}`);
	});

	// Validation
	test('getNameErrors()', () => {
		expect(wrapper.vm.getNameErrors()).toEqual([]);
		wrapper.vm.$v.name.$touch();

		wrapper.setData({ name: 'yo' });
		expect(wrapper.vm.getNameErrors()).toEqual([]);

		wrapper.setData({ name: '' });
		expect(wrapper.vm.getNameErrors()).toEqual(['Required']);


		localStorage.setItem(LS_KEY, JSON.stringify([
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
		]));
		wrapper.setData({ name: 'name2' });
		expect(wrapper.vm.getNameErrors()).toEqual(['Name must be unique']);
	});
});
