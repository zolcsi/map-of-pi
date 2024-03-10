import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-information',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './information.component.html',
  styleUrl: './information.component.scss'
})

export class InformationComponent {
  showPopup: boolean = true;

  version: string = 'Alpha V1.0';
  logo: string = "../../assets/images/logo.svg";

  updateItems: { date: string, updates: string[] }[] = [
    {
      date: '3/10/2024',
      updates: [
        'Added Terms of Service section.'
      ]
    },
    {
      date: '3/9/2024',
      updates: [
        'Added GPS navigation feature.',
        'Added Privacy Policy section.'
      ]
    },
    {
      date: '3/8/2024',
      updates: [
        'Added Footer.',
        'Added Information Popup to share latest updates.'
      ]
    }
  ];
  email: string = 'info@mapofpi.com';

  stopPropagation(event: MouseEvent): void {
    // prevent the click event from reaching the parent container.
    event.stopPropagation();
  }
}
