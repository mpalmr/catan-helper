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
	transitions,
} from 'vuetify';
import 'vuetify/src/stylus/app.styl';
import 'roboto-fontface/css/roboto/roboto-fontface.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css';

Vue.use(Vuetify, {
	customProperties: true,
	iconfont: 'md',
	components: {
		VApp,
		VNavigationDrawer,
		VFooter,
		VList,
		VBtn,
		VIcon,
		VGrid,
		VToolbar,
		transitions,
	},
});
