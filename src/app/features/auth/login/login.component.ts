import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthButtonComponent } from '../../../shared/ui/auth/auth-button/auth-button.component';
import { AuthCardComponent } from '../../../shared/ui/auth/auth-card/auth-card.component';
import { AuthInputComponent } from '../../../shared/ui/auth/auth-input/auth-input.component';
import { AuthService } from '../../../services/auth/auth.service';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [AuthCardComponent, AuthInputComponent, AuthButtonComponent, RouterLink,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm : FormGroup;
  errorMessage: string = '';
  loading: boolean = false;
  
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email:['', [Validators.required, Validators.email]],
      password:['', [Validators.required]]
    })

  }

  onSubmit(): void {
    if(this.loginForm.valid){
      this.loading = true;
      this.errorMessage = '';

      this.authService.login(this.loginForm.value).subscribe({
        next: (response) => {
          console.log('Login exitoso:', response);
          this.router.navigate(['/home']);
        }, error: (error) => {
          console.error('Error de login:', error);
          this.errorMessage = 'Credenciales inválidas. Por favor, intenta de nuevo.';
          this.loading = false;
        },
        complete: () => {
          this.loading = false;
        }
      });
    } else {
      this.loginForm.markAllAsTouched();
    }
  }

}
