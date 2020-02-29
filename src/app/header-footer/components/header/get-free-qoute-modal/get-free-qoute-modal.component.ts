import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-free-qoute-modal',
  templateUrl: './get-free-qoute-modal.component.html',
  styleUrls: ['./get-free-qoute-modal.component.scss']
})
export class GetFreeQouteModalComponent implements OnInit {

  radioMethod : string[] = [
    "WhatsApp",
    "Telegram",
    "FaceBook",
    "Email",
    "Phone",
    "Imo"
  ]

  constructor() { }

  ngOnInit() {
  }

}
