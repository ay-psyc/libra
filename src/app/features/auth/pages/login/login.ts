import { Component } from '@angular/core';
import { InputText } from 'primeng/inputtext';
import { Button } from 'primeng/button';

@Component({
  selector: 'app-login',
  imports: [InputText, Button],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {}
