import Vue from 'vue'
// import Vuetify from 'vuetify/lib'
import Vuetify from 'vuetify'
import { Scroll } from 'vuetify/lib/directives';

import 'vuetify/src/stylus/app.styl'


Vue.use(Vuetify, {
	iconfont: 'md',
	directives: {
		Scroll
	}
})
