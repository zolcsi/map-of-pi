import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { UiStateService } from './core/service/ui-state.service';
import { Pi } from '@pinetwork-js/sdk';
import { AuthResult } from '@pinetwork-js/sdk/build/types';
import { SnackService } from './core/service/snack.service';
import axios from 'axios';
import { UserService } from './core/service/currentUser.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  constructor(
    private readonly snackService: SnackService,
    private readonly uiStateService: UiStateService,
    private readonly userService: UserService,
  ) {
    this.uiStateService.setShowBackButton(false);
  }

  ngOnInit() {
    Pi.authenticate(['username', 'payments', 'wallet_address'], (p) => console.log(p))
      .then(async (auth: AuthResult) => {
        this.snackService.showMessage(`Logging in ${auth.user.username}`);

        try {
          const response = await axios.post('http://localhost:8000/user/signin', { authResult: auth });

          const { currentUser, token } = response.data;

          localStorage.setItem('accessToken', token);
          this.userService.setCurrentUser(currentUser);
          const user = this.userService.getCurrentUser();
          console.log('current user : ', user);
        } catch (error) {
          console.log(error);
        }
      })
      .catch(function (error) {
        console.error(error);
      });
  }
}
