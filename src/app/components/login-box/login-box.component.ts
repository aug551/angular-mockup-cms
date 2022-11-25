import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User, UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login-box',
  templateUrl: './login-box.component.html',
  styleUrls: ['./login-box.component.scss']
})
export class LoginBoxComponent implements OnInit {
  loginForm!: FormGroup;
  email = new FormControl("", [Validators.required, Validators.email]);
  password = new FormControl("", [Validators.required]);
  invalidAccount = false;
  user!: User;

  constructor(private usersService: UsersService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: this.email,
      password: this.password
    });

    this.usersService.getUser().subscribe((user) => {
      this.user = user;
    });
  }

  getEmailError() {
    if (this.email.hasError('required')) {
      return 'Email required.';
    }
    else if (this.email.hasError('email')) {
      return 'Not a valid email.';
    }
    else {
      return '';
    }
  }

  getPasswordError() {
    return this.password.hasError('required') ? 'Password required.' : '';
  }

  login() {
    let res = this.usersService.login(String(this.email.value), String(this.password.value));
    if (res == 400) this.loginFailed();
  }

  loginFailed() {
    this.invalidAccount = true;
  }

}
