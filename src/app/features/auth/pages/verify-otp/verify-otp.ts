import { Component } from '@angular/core';
import { InputText } from 'primeng/inputtext';

@Component({
  selector: 'app-verify-otp',
  imports: [InputText],
  templateUrl: './verify-otp.html',
  styleUrl: './verify-otp.css',
  standalone: true,
})
export class VerifyOtp {}
