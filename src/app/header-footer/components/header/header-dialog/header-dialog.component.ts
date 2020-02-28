import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-dialog',
  templateUrl: './header-dialog.component.html',
  styleUrls: ['./header-dialog.component.scss']
})
export class HeaderDialogComponent implements OnInit {

  type : string = "";
  title : string = "";

  constructor() { }

  ngOnInit() {
    if (this.type == "contact") {
      this.title = "Contact Us";
    }
    else if (this.type == "start") {
      this.title = "Get Started";
    }
    else if (this.type == "qoute") {
      this.title = "Get Free Qoute";
    }
  }

}
