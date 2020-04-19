import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { MatDialog, MatButton } from "@angular/material";
import { HeaderDialogComponent } from "./header-dialog/header-dialog.component";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  @ViewChild("contact", { static: true }) contactBtn: ElementRef<MatButton>;
  @ViewChild("start", { static: true }) startBtn: ElementRef<MatButton>;
  @ViewChild("qoute", { static: true }) qouteBtn: ElementRef<MatButton>;

  constructor(public matdialog: MatDialog) {}

  ngOnInit() {}

  openModal(type: string) {
    const dialog = this.matdialog.open(HeaderDialogComponent, {
      width: "700px",
      height: "600px",
    });
    if (type == "contact") dialog.componentInstance.type = "contact";
    else if (type == "start") dialog.componentInstance.type = "start";
    else if (type == "qoute") dialog.componentInstance.type = "qoute";

    dialog.afterClosed().subscribe((result) => {
      (this.contactBtn as any)._getHostElement().blur();
      (this.startBtn as any)._getHostElement().blur();
      (this.qouteBtn as any)._getHostElement().blur();
    });
  }
}
