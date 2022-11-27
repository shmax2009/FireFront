import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {compareNumbers} from "@angular/compiler-cli/src/version_helpers";
import {filter} from "rxjs";
import {uniqueNamesGenerator, Config, adjectives, colors, animals, names, starWars} from 'unique-names-generator';

@Component({
  selector: 'app-main-seite',
  templateUrl: './main-seite.component.html',
  styleUrls: ['./main-seite.component.scss'],
})


export class MainSeiteComponent implements OnInit {
  thema: Thema = Thema.aktiv;
  filter: string = "";
  public users: User[] = [];
  colorStyle = "";
  isSelected: boolean = false;
  innerWidth = 0;

  constructor() {

  }

  ngOnInit(): void {
    //TODO
    this.generator();
    setInterval(() =>{
      this.innerWidth = window.innerWidth;
    })
  }


  generator() {
    let count = 80;
    for (let i = 0; i < count; i++) {

      let surname = uniqueNamesGenerator({
        dictionaries: [starWars]
      })
      let name = surname.split(' ')[0]
      surname = surname.split(' ').slice(1).join()
      this.users.push(new User(false, name, surname));
    }
    for (let i = 0; i < count; i++) {
      let surname = uniqueNamesGenerator({
        dictionaries: [starWars]
      })
      let name = surname.split(' ')[0]
      surname = surname.split(' ').slice(1).join()
      surname += " Jr."
      this.users.push(new User(true, name, surname));
    }
  }

  isSelect(id: number): string {
    if (id == 2) {
      if (this.isSelected)
        return "selected"
      else
        return "";
    }

    let needThema: Thema = (id == 0) ? Thema.aktiv : Thema.jugend;
    if (this.thema == needThema)
      return "select";
    else
      return "unselect";
  }

  selectThema(themaName: String) {
    let thema: Thema = (themaName == "aktiv") ? Thema.aktiv : Thema.jugend;
    this.thema = thema;
  }


  searchUser() {
    this.colorStyle = this.thema;
    let isJugend = this.thema == Thema.jugend;
    console.log(this.filter)
    return this.users.filter(user => {
      return user.isJugend == isJugend && ((user.Name + " " + user.Vorname).toLowerCase().indexOf(this.filter.toLowerCase()) != -1);
    })
  }
}


enum Thema {
  jugend = "jugend",
  aktiv = "aktiv",
}

class User {
  constructor(public isJugend: boolean = false, public Name: String = "", public Vorname = "") {
  }
}
