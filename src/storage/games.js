const lsKey = 'games';

export default {
	get games() {
		return Object.fromEntries(Object.entries(JSON.parse(localStorage.getItem(lsKey)) || {})
			.map(([id, { lastPlayed, created, ...game }]) => [id, {
				lastPlayed: lastPlayed ? new Date(lastPlayed) : null,
				created: new Date(created),
				...game,
			}]));
	},

	set games(games) {
		localStorage.setItem(lsKey, JSON.stringify(games));
	},

	add({ id, ...game }) {
		if (this.games[id]) throw new Error('Game ID must be unique.');
		this.games = {
			...this.games,
			[id]: {
				settlements: [],
				lastPlayed: null,
				created: new Date(),
				...game,
			},
		};
		return this;
	},

	remove(id) {
		this.games = Object.fromEntries(Object.entries(this.games).filter(([k]) => k !== id));
		return this;
	},
};
