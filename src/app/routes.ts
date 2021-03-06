import { Routes } from '@angular/router'
import {
    EventsListComponent,
    EventDetailsComponent,
    CreateEventComponent,
    EventListResolver,
    CreateSessionComponent,
    EventResolver
} from './events/index'

import { Error404Component } from './errors/404.component';

export const appRoutes: Routes = [
    {
        path: 'events/new', component: CreateEventComponent,
        canDeactivate: ['canDeactivateCreateEvent']
    }, //moved to top so it does not conflict with the :id path
    {
        path: 'events', component: EventsListComponent,
        resolve: {events:EventListResolver}
    },
    { path: 'events/:id', component: EventDetailsComponent, resolve: {event:EventResolver} },
    { path: 'events/session/new', component: CreateSessionComponent },
    { path: '404', component: Error404Component },
    { path: '', redirectTo: '/events', pathMatch: 'full' },
    //user module starts here.
    //when a route starts with /user, load a user module from this path
    { path: 'user', loadChildren: './user/user.module#UserModule'}
]