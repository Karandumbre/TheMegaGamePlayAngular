import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { CommonService } from './../../../../Shared/common.service';
import { LoginService } from './../../../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'megagameplay-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-component.scss'],
})
export class SignInComponent implements OnInit {
  login: FormGroup;
  email: FormControl;
  password: FormControl;
  isSubmitted = false;
  serverErrorMessages: any;
  constructor(private fb: FormBuilder, private commonService: CommonService, private ls: LoginService, private router: Router) {

  }

  ngOnInit() {
    this.commonService.changeRouteData('admin');
    this.createFormControls();
    this.createForm();
  }
  createForm() {
    this.login = this.fb.group({
      email: this.email,
      password: this.password
    });
  }
  createFormControls() {
    this.email = new FormControl('', [Validators.required, Validators.email]);
    this.password = new FormControl('', [Validators.required]);
  }

  onSubmit() {
    this.isSubmitted = true;
    if (this.login.valid) {
      this.ls.login(this.login.value).subscribe(
        res => {
          this.ls.setCookie('email', this.login.value.email);
          this.ls.setToken(res['token']);
          this.router.navigate(['/an-admin/dashboard']);
        },
        err => {
          this.serverErrorMessages = err.statusText;
        }
      );
    }
  }

}
