import { Component, inject, signal } from '@angular/core';
import {
  email,
  form,
  FormField,
  required,
  submit,
} from '@angular/forms/signals';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDivider } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { HttpClient } from '@angular/common/http';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'auth-sign-in',
  templateUrl: './sign-in.html',
  imports: [
    RouterLink,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
    FormField,
    MatDivider,
  ],
})
export default class AuthSignIn {
  private router = inject(Router);
  private http = inject(HttpClient);

  protected signInFormModel = signal({
    email: 'admin',
    password: 'admin',
  });

  protected signInForm = form(this.signInFormModel, (form) => {
    required(form.email, { message: 'Debes ingresar un usuario' });
    required(form.password, { message: 'Debes ingresar una contraseña' });
  });

  signIn(event: Event) {
    event.preventDefault();

    submit(this.signInForm, async () => {
      const { email, password } = this.signInFormModel();

      try {
        const response: any = await this.http
          .post('http://localhost:3000/api/v1/auth/sign-in', {
            username: email,
            password: password,
          })
          .toPromise();

        localStorage.setItem('accessToken', response.data.accessToken);

        this.router.navigateByUrl('/admin/inicio');
      } catch (error) {
        console.error('Error al iniciar sesión:', error);
      }
    });
  }
}