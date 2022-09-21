import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-box',
  templateUrl: './login-box.component.html',
  styleUrls: ['./login-box.component.scss']
})
export class LoginBoxComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);

  constructor() { }

  ngOnInit(): void {
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
    return this.password.hasError('required') ? "Password required." : '';
  }

}
