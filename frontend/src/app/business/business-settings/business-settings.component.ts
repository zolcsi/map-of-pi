import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-business-settings',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatButtonModule],
  templateUrl: './business-settings.component.html',
  styleUrl: './business-settings.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BusinessSettingsComponent {
  businessTypes: string[] = ['restaurant', 'garage', 'music-shop'];
  businessForm = this.formBuilder.group({
    name: ['', Validators.required],
    category: ['', Validators.required],
    address: ['', Validators.required],
  });

  constructor(private readonly formBuilder: FormBuilder) {}
}
