import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { UserService } from 'src/app/users/user.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  view = true;

  formErrors = '';
  formSuccess = '';

  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });

  registerForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl('')
  });

  loginFormLoading = false;
  registerFormLoading = false;

  constructor(private notifierService: NotifierService, public authService: AuthService, private routes: ActivatedRoute, private router: Router, private userService: UserService) { }

  ngOnInit(): void {
  }

  loginUser(): void {
    if (this.loginForm.invalid) {
      console.log(this.loginForm)
      return;
    }

    this.authService.loginUser(this.loginForm.value)
      .subscribe((res: any) => {
        if (res.message) {
          this.notifierService.notify("success", res.message);
        }

        this.userService.activatedUser = res.user;

        this.router.navigateByUrl('');
      }, (err: any) => {
        this.notifierService.notify("error", err.error.error);
      })
  }

  registerUser(): void {
    if (this.registerForm.invalid) return;

    this.authService.createUser(this.registerForm.value)
      .subscribe((res: any) => {
        console.log(res);
        this.notifierService.notify("success", res.message);
        this.userService.activatedUser = res.result;
        this.router.navigateByUrl('');
      }, (err: any) => {
        console.log(err)
        if (err.error.error.errors.username.kind === 'unique') {
          this.notifierService.notify("error", "That email has already been used. Try logging in?");
        } else {
          this.notifierService.notify("error", err.error.error);
        }
      })
  }

}
