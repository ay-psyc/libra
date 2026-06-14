import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from './features/auth/pages/login/login';
import { Register } from './features/auth/pages/register/register';
import { ForgotPassword } from './features/auth/pages/forgot-password/forgot-password';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Login, Register, ForgotPassword],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('libra');
}
