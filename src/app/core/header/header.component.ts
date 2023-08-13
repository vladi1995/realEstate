import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { Subscription } from 'rxjs';
import { User } from 'src/app/auth/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  collapsed = true;
  private userSub: Subscription;
  isAuthenticated = false;
  user: any;

  constructor(private authService: AuthService) {}

  onLogout() {
    this.authService.logout();
  }

  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe(
      user => {
        this.isAuthenticated = !user ? false : true;
      }
    );

    this.authService.user.subscribe(data => {
      this.user = data;
    });
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }
}
