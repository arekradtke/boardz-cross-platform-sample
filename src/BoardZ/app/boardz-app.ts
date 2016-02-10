// angular2 stuff
import {Component, provide} from 'angular2/core';
import {FormBuilder} from 'angular2/common';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import {RouteConfig, ROUTER_DIRECTIVES, Router} from 'angular2/router';

// rx operators
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/publish';
import 'rxjs/add/operator/publishReplay';

// services
import {ApplicationConfiguration} from './app-config';
import {LoginService} from './services/login/login-service';

// components
import {LoginForm} from './components/login/login-form';
import {Dashboard} from './components/dashboard/dashboard';
import {Sidebar} from './components/sidebar/sidebar';
import {Headerbar} from './components/headerbar/headerbar';

@Component({
    selector: 'boardz-app',
    providers: [
        // Angular stuff
        Http, HTTP_PROVIDERS,
        FormBuilder,

        // Special static config type
        [provide('app.config', {useValue: ApplicationConfiguration})],

        // Our own stuff:
        LoginService
    ],
    directives: [
        // Angular stuff
        ROUTER_DIRECTIVES,

        // Our own stuff:
        Sidebar,
        Headerbar
    ],
    templateUrl: 'app/boardz-app.html'
})
@RouteConfig([
    { path: '/dashboard', component: Dashboard, name: 'Dashboard' },
    { path: '/login', component: LoginForm, name: 'Login' }
])
export class BoardzApp {

    constructor(router: Router) {
        router.navigate(['Login']);
    }

}