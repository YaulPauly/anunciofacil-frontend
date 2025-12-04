import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthButtonComponent } from '../../../shared/ui/auth/auth-button/auth-button.component';
import { AuthCardComponent } from '../../../shared/ui/auth/auth-card/auth-card.component';
import { AuthFileInputComponent } from '../../../shared/ui/auth/auth-file-input/auth-file-input.component';
import { AuthInputComponent } from '../../../shared/ui/auth/auth-input/auth-input.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth/auth.service';
import { UsuarioRegisterDTO } from '../../../core/models/auth.models';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    AuthCardComponent,
    AuthInputComponent,
    AuthFileInputComponent,
    AuthButtonComponent,
    RouterLink,
    ReactiveFormsModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm: FormGroup;
  loading = false;
  errorMessage = '';
  selectedFile: File | null = null;

  constructor(
    private fb:FormBuilder,
    private authService: AuthService,
    private router: Router
  ){
    this.registerForm = this.fb.group({
      nombre: ['', [Validators.required]],
      apellidos: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
    
  onFotoSeleccionada(file: File) {
    this.selectedFile = file;
  }

  async onSubmit() {
    if(this.registerForm.invalid){
      this.registerForm.markAllAsTouched();
      return;
    }
    this.loading = true;
    this.errorMessage = '';

    try {
      const datosRegistro: UsuarioRegisterDTO = {
        ...this.registerForm.value,
        fotoPerfil: null
      };

      if(this.selectedFile){
        datosRegistro.fotoPerfil = await this.convertirBase64(this.selectedFile);
      }

      this.authService.register(datosRegistro).subscribe({
        next:() => {
          this.router.navigate(['/login']);
        },
        error:(err) => {
          console.error(err);
          if(err.error && typeof err.error === 'string'){
            this.errorMessage = err.error;
          }else {
            this.errorMessage = 'Error al registrar el usuario. Por favor, intenta de nuevo.';
          }    
          this.loading = false;
        }
      });

      

    } catch (error) {
      console.error('Error al procesar la imagen:', error);
      this.loading = false;
    }
  }

  private convertirBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = error => reject(error); 
    });
  }

  

}
