import Vue from 'vue';
import * as _ from 'lodash';
import iView from 'iview';
import 'iview/dist/styles/iview.css';

Vue.config.productionTip = false;
Vue.use(iView);
const component = require.context('./components', false, /[\w-]+\.vue$/);
component.keys().forEach(fileName => {
    const config = component(fileName);
    const name = _.upperFirst(_.camelCase(fileName.replace(/^\.\/(.*)\.\w+$/, '$1')));
    Vue.component(name, config.default || config);
});
