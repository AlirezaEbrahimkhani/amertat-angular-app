import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-help-button',
  templateUrl: './help-button.component.html',
  styleUrls: ['./help-button.component.scss']
})
export class HelpButtonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  toggleNav() {
    document.getElementById("help-btn").classList.toggle("clicked");
    document.getElementById("slide").classList.toggle("open");
  }

}
