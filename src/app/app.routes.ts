import { Routes } from '@angular/router';
import { Testercomp } from './testercomp/testercomp';
import { Home } from './home/home';

export const routes: Routes = [
        {
        path:'',
        title:'Gavin Power',
        component:Home,
    },
    {
        path: 'testercomp',
        title: 'testercomp page',
        component:Testercomp,
    }
];
