import { Component } from '@angular/core';
import { InputText } from 'primeng/inputtext';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [InputText, RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.css',
  standalone:true
})
export class Register {}
