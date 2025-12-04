import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-auth-file-input',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './auth-file-input.component.html',
  styleUrls: ['./auth-file-input.component.css']
})
export class AuthFileInputComponent {
  @Input() label = '';
  @Input() icon?: string;
  @Input() accept = 'image/*';

//evento salida
  @Output() fileSelected = new EventEmitter<File | null>();

  selectedFileName = 'Ningún archivo seleccionado';
  inputId = `file-input-${Math.random().toString(36).slice(2, 9)}`;

  onFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if(file) {
      this.selectedFileName = file.name;
      this.fileSelected.emit(file);
    }else {
      this.selectedFileName = 'Ningún archivo seleccionado';
      this.fileSelected.emit(null);
    }
  }
}
