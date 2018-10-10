const lsKey = 'games';

export default {
	games: Object.fromEntries(Object.entries(JSON.parse(localStorage.getItem(lsKey)) || {})
		.map(([id, { lastPlayed, created, ...game }]) => [id, {
			lastPlayed: lastPlayed ? new Date(lastPlayed) : null,
			created: new Date(created),
			...game,
		}])),

	save() {
		localStorage.setItem(lsKey, JSON.stringify(this.games));
		return this;
	},

	add({ id, ...game }) {
		if (this.games[id]) throw new Error('Game ID must be unique.');
		this.games[id] = {
			settlements: [],
			lastPlayed: null,
			created: new Date(),
			...game,
		};
		this.save();
		return this;
	},
};
