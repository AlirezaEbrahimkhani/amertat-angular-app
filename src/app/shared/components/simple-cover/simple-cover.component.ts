import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-simple-cover',
  templateUrl: './simple-cover.component.html',
  styleUrls: ['./simple-cover.component.scss']
})
export class SimpleCoverComponent implements OnInit {
  @Input('imgSrc') imgSrc : string;
  @Input('title') title : string;

  constructor() { }

  ngOnInit() {
  
  }

}
