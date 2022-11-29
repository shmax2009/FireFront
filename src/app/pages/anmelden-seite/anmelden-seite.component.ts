import {Component, OnInit} from '@angular/core';
import {LoginService} from "../../core/services/login.service";

@Component({
  selector: 'app-anmelden-seite',
  templateUrl: './anmelden-seite.component.html',
  styleUrls: ['./anmelden-seite.component.scss']
})
export class AnmeldenSeiteComponent implements OnInit {
  isOpen: boolean = true;

  constructor(private loginService: LoginService) {
  }

  ngOnInit(): void {
  }

  login(username: string, password: string) {
    this.loginService.login({
      username: username,
      password: password
    }).subscribe({
      next: res => {
        // @ts-ignore
        sessionStorage.setItem("access_token", res.access_token);
        // @ts-ignore
        sessionStorage.setItem("refresh_token", res.refresh_token);
      }
    })

  }

  isOpenTheme(): string {
    return this.isOpen ? 'password' : 'text';
  }
}
