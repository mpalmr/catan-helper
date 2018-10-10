export function getGame() {
	const game = JSON.parse(localStorage.getItem('game'));
	if (!game) return game;
	return {
		...game,
		created: new Date(game.created),
		modified: new Date(game.modified),
	};
}
