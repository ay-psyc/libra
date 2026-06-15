import { Component } from '@angular/core';
import { InputText } from 'primeng/inputtext';

@Component({
  selector: 'app-reset-password',
  imports: [InputText],
  templateUrl: './reset-password.html',
  styleUrl: './reset-password.css',
  standalone:true
})
export class ResetPassword {}
