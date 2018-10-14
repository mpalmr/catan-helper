import Vue from 'vue';
import {
	Vuetify,
	VApp,
	VNavigationDrawer,
	VFooter,
	VList,
	VBtn,
	VIcon,
	VGrid,
	VToolbar,
	VDataTable,
	VAlert,
	transitions,
} from 'vuetify';
import 'vuetify/src/stylus/app.styl';
import 'material-design-icons-iconfont/dist/material-design-icons.css';

Vue.use(Vuetify, {
	components: {
		customProperties: true,
		iconfont: 'md',
		VApp,
		VNavigationDrawer,
		VFooter,
		VList,
		VBtn,
		VIcon,
		VGrid,
		VToolbar,
		VDataTable,
		VAlert,
		transitions,
	},
});
