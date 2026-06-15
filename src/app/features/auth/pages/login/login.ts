import { Component } from '@angular/core';
import { InputText } from 'primeng/inputtext';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [InputText, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
  standalone:true
})
export class Login {}
