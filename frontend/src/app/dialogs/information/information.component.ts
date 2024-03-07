import { Component } from '@angular/core';

@Component({
  selector: 'app-information',
  standalone: true,
  imports: [],
  templateUrl: './information.component.html',
  styleUrl: './information.component.scss'
})
export class InformationComponent {
  version: string = 'Alpha V1.0'

  logo: string = "../../assets/images/logo.svg";
  email_icon: string = "../../assets/images/shared/Email_Logo.svg";
  facebook_icon: string = "../../assets/images/shared/Facebook_Logo_Primary.png";
  instagram_icon: string = "../../assets/images/shared/Instagram_Glyph_Gradient.png";
  twitter_icon: string = "../../assets/images/shared/Twitter_Logo.png";
  privacy_policy: string = "../../assets/images/shared/privacy-policy-icon.svg";

  emailLink: string = "mailto:info@mapofpi.com";
  facebookLink: string = "https://facebook.com/mapofpi";
  instagramLink: string = "https://instagram.com/mapofpi";
  twitterLink: string = "https://twitter.com/mapofpi";
  privacyPolicyLink: string = "path/to/privacy_policy_page";
}
