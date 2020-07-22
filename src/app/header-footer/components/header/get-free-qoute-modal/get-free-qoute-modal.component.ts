import { Component, OnInit } from "@angular/core";
import { MatDialogRef, MatSnackBar } from "@angular/material";
import { HeaderFooterService } from "src/app/header-footer/shared/services/header-footer.service";
import { FormGroup, Validators, FormControl } from "@angular/forms";

@Component({
  selector: "app-get-free-qoute-modal",
  templateUrl: "./get-free-qoute-modal.component.html",
  styleUrls: ["./get-free-qoute-modal.component.scss"],
})
export class GetFreeQouteModalComponent implements OnInit {
  radioMethod: any[] = [];

  form = new FormGroup({
    name: new FormControl("", [Validators.required]),
    family: new FormControl("", [Validators.required]),
    phoneNumber: new FormControl("", [Validators.required]),
    method: new FormControl("", [Validators.required]),
    subject: new FormControl("", [Validators.required]),
    message: new FormControl("", [
      Validators.required,
      Validators.maxLength(200),
    ]),
    address: new FormControl("", [
      Validators.required,
      Validators.maxLength(200),
    ]),
  });

  constructor(
    public dialogRef: MatDialogRef<GetFreeQouteModalComponent>,
    private headerFooterSrv: HeaderFooterService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.headerFooterSrv.getMethods().subscribe((response: any) => {
      const { data } = response;
      this.radioMethod = data;
    });
  }

  onCancel() {
    this.dialogRef.close();
  }

  onSubmit() {
    this.headerFooterSrv
      .getFreeQouteForm(this.form.value)
      .subscribe((response: any) => {
        if (response.success) {
          this.snackBar.open("Successfully Submited!", "SUCCESS", {
            duration: 2000,
          });
        }
      });
    this.dialogRef.close();
  }
}
