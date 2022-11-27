import {Component, Input, OnInit} from '@angular/core';
import {starWars, uniqueNamesGenerator} from "unique-names-generator";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  @Input() Name!: String;
  @Input() Vorname!: String;
  @Input() filter!: string;
  @Input() colorPalette!: string;

  private content!: string;


  public constructor() {
  }

  ngOnInit(): void {
    this.content = this.Name + " " + this.Vorname;
    this.content = this.content.replace(new RegExp(" ", "gi"), match => {
      return "⠀";
    });
  }

  public highlight() {
    if (!this.filter) {
      return this.content;
    }
    let nF = this.filter.replace(new RegExp(" ", "gi"), match => {
      return "⠀";
    });
    return this.content.replace(new RegExp(nF, "gi"), match => {
      return '<span class="text hover ' + this.colorPalette + '">' + match + '</span>';
    });
  }

}
