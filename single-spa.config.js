import {registerApplication, start} from 'single-spa';

registerApplication('navBar', () => import ('./src/navBar/navBar.app.js').then(mod => mod.navBar), () => true);
registerApplication('home', () => import('./src/home/home.app.js'), () => location.pathname === "" || location.pathname === "/" || location.pathname.startsWith('/home'));
registerApplication('angularJS', () => import ('./src/angularJS/angularJS.app.js'), pathPrefix('/angularJS'));
registerApplication('vueJS', () => import ('./src/vue/vue.app.js'), pathPrefix('/vue'));
registerApplication('vueJS2', () => import ('./src/vue2/spa/src/main.js'), pathPrefix('/vue2'));

start();

function pathPrefix(prefix) {
    return function(location) {
        return location.pathname.startsWith(`${prefix}`);
    }
}
