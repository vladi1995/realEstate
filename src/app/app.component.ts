import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { fader } from './router-animations';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    fader,
  ]
})
export class AppComponent implements OnInit {
  constructor(private authService: AuthService) {}

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

  ngOnInit(): void {
     this.authService.autoLogin();
  }
}