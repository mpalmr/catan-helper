import createUuid from 'uuid/v4';

const LS_KEY = 'games';

export default {
	getAll() {
		const values = JSON.parse(localStorage.getItem(LS_KEY)) || [];
		return values.map(({ created, modified, ...game }) => ({
			...game,
			created: new Date(created),
			modified: new Date(modified),
		}));
	},

	new(name) {
		if (!name) throw new Error('Game requires a name');
		const game = {
			name,
			id: createUuid(),
			settlements: [],
			created: new Date(Date.now()),
			modified: new Date(Date.now()),
		};
		localStorage.setItem(LS_KEY, JSON.stringify(this.getAll().concat(game)));
		return game;
	},

	continue(id) {
		const games = this.getAll();
		const continueGame = games.find(game => game.id === id);
		if (!continueGame) throw new Error('Game does not exist');
		continueGame.modified = new Date(Date.now());
		continueGame.created = new Date(continueGame.created);
		localStorage.setItem(LS_KEY, JSON.stringify(games
			.map(game => (game.id === id ? continueGame : game))));
		return continueGame;
	},
};
