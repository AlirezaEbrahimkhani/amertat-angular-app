import { Component, OnInit } from "@angular/core";
import { MatDialogRef } from "@angular/material";

@Component({
  selector: "app-contact-us-modal",
  templateUrl: "./contact-us-modal.component.html",
  styleUrls: ["./contact-us-modal.component.scss"],
})
export class ContactUsModalComponent implements OnInit {
  feedBacks: string[] = [
    "haji namosan karet doroste = 5",
    "haji karet doroste = 4",
    "haji karet okeye = 3",
    "haji karet yekam gir dare = 2",
    "haji razi nistam = 1",
    "haji namosan gand zadi = 0",
  ];

  constructor(public dialogRef: MatDialogRef<ContactUsModalComponent>) {}

  ngOnInit() {}

  onCancel() {
    this.dialogRef.close();
  }
}
