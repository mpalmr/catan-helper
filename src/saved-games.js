import createUuid from 'uuid/v4';

const LS_KEY = 'games';

function getGames() {
	const values = JSON.parse(localStorage.getItem(LS_KEY)) || [];
	return values.map(({ created, modified, ...game }) => ({
		...game,
		created: new Date(created),
		modified: new Date(modified),
	}));
}

export default {
	new() {
		const game = {
			id: createUuid(),
			settlements: [],
			created: new Date(Date.now()),
			modified: new Date(Date.now()),
		};
		localStorage.setItem(LS_KEY, JSON.stringify(getGames().concat(game)));
		return game;
	},

	continue(id) {
		const games = getGames();
		const continueGame = games.find(game => game.id === id);
		if (!continueGame) throw new Error('Game does not exist');
		continueGame.modified = new Date(Date.now());
		continueGame.created = new Date(continueGame.created);
		localStorage.setItem(LS_KEY, JSON.stringify(games
			.map(game => (game.id === id ? continueGame : game))));
		return continueGame;
	},
};
