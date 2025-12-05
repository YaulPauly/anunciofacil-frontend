import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-profile',
  standalone: true,
  imports: [],
  templateUrl: './input-profile.component.html',
  styleUrl: './input-profile.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputProfileComponent {
  @Input({ required: true }) label = '';
  @Input({ required: true }) name = '';
  @Input() placeholder = '';
  @Input() type: 'text' | 'email' | 'password' = 'text';
  @Input() icon?: string;

  get inputId(): string {
    if (this.name) {
      return this.name;
    }

    return (
      this.label
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '') || 'input-profile'
    );
  }
}
