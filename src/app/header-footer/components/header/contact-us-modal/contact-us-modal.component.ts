import { Component, OnInit } from "@angular/core";
import { MatDialogRef, MatSnackBar } from "@angular/material";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { HeaderFooterService } from "src/app/header-footer/shared/services/header-footer.service";

@Component({
  selector: "app-contact-us-modal",
  templateUrl: "./contact-us-modal.component.html",
  styleUrls: ["./contact-us-modal.component.scss"],
})
export class ContactUsModalComponent implements OnInit {
  feedBacks: string[] = [
    "Very Good = 5",
    "Good = 4",
    "Not Good Not Bad Just Fine = 3",
    "Bad = 2",
    "Very Bad = 1",
    "Awful = 0",
  ];
  form = new FormGroup({
    name: new FormControl("", [Validators.required]),
    family: new FormControl("", [Validators.required]),
    phoneNumber: new FormControl("", [Validators.required]),
    feedBack: new FormControl("", [Validators.required]),
    subject: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.required, Validators.email]),
    address: new FormControl("", [
      Validators.required,
      Validators.maxLength(200),
    ]),
  });

  constructor(
    public dialogRef: MatDialogRef<ContactUsModalComponent>,
    private headerFooterSrv: HeaderFooterService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {}

  onSubmit() {
    this.headerFooterSrv
      .contactUsForm(this.form.value)
      .subscribe((response: any) => {
        this.snackBar.open("Successfully Submited!", "SUCCESS", {
          duration: 2000,
        });
      });
  }

  onCancel() {
    this.dialogRef.close();
  }
}
