import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'hello-world',
  loadComponent:() => import('./hello-world/hello-world.component').then((m) => m.HelloWorldComponent),
  },

  { path: 'add-song',
    loadComponent:() => import('./add-song/add-song.component').then((m) => m.AddSongComponent),
  },

  { path: '',
    redirectTo: 'hello-world',
    pathMatch: 'full',
  },
];
