import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-anguliemos-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
    user = new FormControl('', [Validators.required]);
    password = new FormControl('', [Validators.required]);
    msgError = "";

    constructor(public service: LoginService, public router: Router) {
      if (this.service.hasToken()) {
        //this.router.navigate(['clients']);
      }
    }

    ngOnInit() {
    }

    login() {
      this.msgError = "";
      const body = {
        email: this.user.value,
        password: this.password.value
      };

      this.service.login(body).subscribe((response: any) => {
        console.log('OK');
        this.service.setToken(this.user.value);
        //this.router.navigate(['clients']);
      }, (e: any) => {
        console.log('ERROR');
        console.log(e);
        this.msgError = e;
      });
    }
  }

