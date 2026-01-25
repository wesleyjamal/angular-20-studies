import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./features/home/home.component').then(m => m.HomeComponent),
        title: 'Angular 20 · Study Playground'
    },
    {
        path: 'signals',
        loadComponent: () => import('./features/signals/signals-intro.component').then(m => m.SignalsIntroComponent),
        title: 'Angular 20 · Signals'
    },
    {
        path: 'linked-signal',
        loadComponent: () => import('./features/signals/linked-signal.component').then(m => m.LinkedSignalComponent),
        title: 'Angular 20 · Linked Signal'
    },
    {
        path: 'control-flow',
        loadComponent: () => import('./features/control-flow/control-flow.component').then(m => m.ControlFlowComponent),
        title: 'Angular 20 · Control Flow'
    },
    {
        path: 'resource',
        loadComponent: () => import('./features/resource/resource-demo.component').then(m => m.ResourceDemoComponent),
        title: 'Angular 20 · Resource API'
    },
    {
        path: 'posts',
        loadComponent: () => import('./features/posts/posts.component').then(m => m.PostsComponent),
        title: 'Angular 20 · Posts API'
    }
];
