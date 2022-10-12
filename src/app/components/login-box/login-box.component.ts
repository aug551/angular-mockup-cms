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
  email = new FormControl(null, [Validators.required, Validators.email]);
  password = new FormControl(null, [Validators.required]);
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
    if (this.email.value === 'john.doe@example.com' && this.password.value === 'password') {
      this.usersService.setUser();
    }
    else {
      this.invalidAccount = true;
    }
  }

}
