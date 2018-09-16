import Vue from 'vue';
import Router from 'vue-router';
import * as _ from 'lodash';
import iView from 'iview';
import locale from 'iview/dist/locale/zh-CN';
import 'iview/dist/styles/iview.css';

Vue.config.productionTip = false;
Vue.use(Router);
Vue.use(iView, { locale });
const component = require.context('./components', false, /[\w-]+\.vue$/);
component.keys().forEach(fileName => {
    const config = component(fileName);
    const name = _.upperFirst(_.camelCase(fileName.replace(/^\.\/(.*)\.\w+$/, '$1')));
    Vue.component(name, config.default || config);
});
