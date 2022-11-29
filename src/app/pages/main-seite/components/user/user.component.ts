import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'user-element',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  @Input() Name!: String;
  @Input() Vorname!: String;
  @Input() filter!: string;
  @Input() theme!: string;

  readonly EMPTY_CHARACTER: string = "⠀";
  private content!: string;


  public constructor() {
  }

  ngOnInit(): void {
    this.content = this.Name + " " + this.Vorname;
    this.content = this.content.replace(new RegExp(" ", "gi"), () => {
      return this.EMPTY_CHARACTER;
    });
  }

  public highlight() {
    if (!this.filter) {
      return this.content;
    }
    let withNormalSpace = this.filter.replace(new RegExp(" ", "gi"), () => {
      return this.EMPTY_CHARACTER;
    });
    return this.content.replace(new RegExp(withNormalSpace, "gi"), match => {
      return '<span class="text hover ' + this.theme + '">' + match + '</span>';
    });
  }

}

