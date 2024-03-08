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

  version: string = 'Alpha V1.0'

  logo: string = "../../assets/images/logo.svg";
  email_icon: string = "../../assets/images/shared/Email_Logo.svg";
  facebook_icon: string = "../../assets/images/shared/Facebook_Logo_Primary.png";
  instagram_icon: string = "../../assets/images/shared/Instagram_Glyph_Gradient.png";
  twitter_icon: string = "../../assets/images/shared/Twitter_Logo.png";

  emailLink: string = "mailto:info@mapofpi.com";
  facebookLink: string = "https://facebook.com/mapofpi";
  instagramLink: string = "https://instagram.com/mapofpi";
  twitterLink: string = "https://twitter.com/mapofpi";

  stopPropagation(event: MouseEvent): void {
    // prevent the click event from reaching the parent container.
    event.stopPropagation();
  }
}
