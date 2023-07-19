import { Component } from '@angular/core';
import { AuthResponseData, AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  isLoading = false;
  error: string = null;

  constructor(private authService: AuthService, private router: Router) { }

  onSubmit(form: NgForm) {
      if (!form.valid) {
          return;
      }
      const email = form.value.email;
      const password = form.value.password;
      this.isLoading = true;

      let authObs: Observable<AuthResponseData>;

      authObs = this.authService.signUp(email, password);

      authObs.subscribe(resData => {
          this.isLoading = false;
          this.router.navigate(['./']);
      }, errorMessage => {
          this.error = errorMessage;
          this.isLoading = false;
      });

      form.reset();
  }
}
