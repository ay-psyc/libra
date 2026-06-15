import { Routes } from '@angular/router';
import { authRoutes } from './features/auth/auth.routes';
import { NotFound } from './shared/pages/not-found/not-found';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  ...authRoutes,
  { path: '**', component: NotFound },
];
