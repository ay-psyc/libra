import { Routes } from '@angular/router';
import { authRoutes } from './features/auth/auth.routes';
import { NotFound } from './features/not-found/not-found';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  ...authRoutes,
  { path: '**', component: NotFound },
];
