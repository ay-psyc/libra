import { Component } from '@angular/core';
import { InputText } from 'primeng/inputtext';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  imports: [InputText, RouterLink],
  templateUrl: './forgot-password.html',
  styleUrl: './forgot-password.css',
  standalone:true
})
export class ForgotPassword {}
