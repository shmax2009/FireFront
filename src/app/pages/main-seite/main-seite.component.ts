import {Component, OnInit} from '@angular/core';
import {UsersService} from "../../core/services/users.service";
import {LoginService} from "../../core/services/login.service";
import {Router} from "@angular/router";
import {Observable} from "rxjs";

@Component({
  selector: 'app-main-seite',
  templateUrl: './main-seite.component.html',
  styleUrls: ['./main-seite.component.scss'],
})


export class MainSeiteComponent implements OnInit {
  theme: Theme = Theme.aktiv;

  users: User[] = [];

  isSearchFieldOpen: boolean = false;

  readonly MAX_MOBILE_WIDTH: number = 550;

  filter: string = "";

  constructor(private usersService: UsersService, private loginService: LoginService, private router: Router) {

  }

  ngOnInit(): void {
    this.redirect();
    this.usersService.getAdults().subscribe((res) => {
      res.forEach(adult => {
        this.users.push(new User(false, adult.surname, adult.name))
      })
    })
  }

  redirect() {
    this.loginService.check().pipe(
      () => {
        this.router.navigate(['/anmelden']).then(() => {})
        return new Observable();
      }
    )
  }


  isSelect(id: number): string {
    if (id == 2) {
      if (this.isSearchFieldOpen)
        return "selected"
      else
        return "";
    }

    let needTheme: Theme = (id == 0) ? Theme.aktiv : Theme.jugend;
    if (this.theme == needTheme)
      return "select";
    else
      return "unselect";
  }

  selectTheme(themeName: String): void {
    this.theme = (themeName == "aktiv") ? Theme.aktiv : Theme.jugend;
  }

  searchUser(): User[] {
    return this.users.filter(user => {
      return user.isJugend == (this.theme == Theme.jugend) && ((user.Name + " " + user.Vorname).toLowerCase().indexOf(this.filter.toLowerCase()) != -1);
    })
  }

  isMobile(): boolean {
    return window.innerWidth <= this.MAX_MOBILE_WIDTH;
  }
}


enum Theme {
  jugend = "jugend",
  aktiv = "aktiv",
}

class User {
  constructor(public isJugend: boolean = false, public Name: String = "", public Vorname = "") {
  }
}
