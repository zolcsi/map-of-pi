import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { UserService } from '../../core/service/currentUser.service';

@Component({
  selector: 'app-loyalty-info',
  standalone: true,
  imports: [],
  templateUrl: './loyalty-info.component.html',
  styleUrl: './loyalty-info.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoyaltyInfoComponent implements OnInit {
  currentUser: any;

  constructor(
    private userService: UserService,
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.currentUser = this.userService.getCurrentUser();
    console.log('from loyality info component');
    this.cdr.detectChanges();
  }
}
