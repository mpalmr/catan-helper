import * as resourceImages from './assets/images/resources';


export const resources = Object.keys(resourceImages).map(id => ({
	id,
	name: `${id.charAt(0).toUpperCase()}${id.slice(1)}`,
}));
