import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../../shared/header/header.component';

@Component({
  selector: 'app-information',
  standalone: true,
  imports: [CommonModule, RouterLink, HeaderComponent],
  templateUrl: './information.component.html',
  styleUrl: './information.component.scss'
})

export class InformationComponent {
  showPopup: boolean = true;
  showPrivacyPolicyPopup: boolean = false;

  version: string = 'Alpha V1.0';
  logo: string = "../../assets/images/logo.svg";

  date: string = '3/8/2024';
  updateItems: string[] = [
    'Added footer.', 
    'Added information popup for latest updates.', 
  ];

  stopPropagation(event: MouseEvent): void {
    // prevent the click event from reaching the parent container.
    event.stopPropagation();
  }
}
