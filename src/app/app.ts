import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from './features/auth/pages/login/login';
import { Register } from './features/auth/pages/register/register';
import { ForgotPassword } from './features/auth/pages/forgot-password/forgot-password';
import { VerifyOtp } from './features/auth/pages/verify-otp/verify-otp';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Login, Register, ForgotPassword, VerifyOtp],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('libra');
}
