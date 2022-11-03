import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-profile-dialog',
  templateUrl: './user-profile-dialog.component.html',
  styleUrls: ['./user-profile-dialog.component.scss']
})
export class UserProfileDialogComponent implements OnInit {
  userEditForm!: FormGroup;
  id = new FormControl(this.data.user.id);
  email = new FormControl(this.data.user.email, [Validators.email, Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]);
  fn = new FormControl(this.data.user.firstName, [Validators.required]);
  ln = new FormControl(this.data.user.lastName, [Validators.required]);
  pn = new FormControl(this.data.user.phone_number, [Validators.required]);
  building = new FormControl(this.data.user.building, [Validators.required]);
  unit = new FormControl(this.data.user.unit, [Validators.required]);

  constructor(public dialogRef: MatDialogRef<UserProfileDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { user: User, changeRequested: any },
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.userEditForm = this.formBuilder.group({
      id: this.id,
      email: this.email,
      firstName: this.fn,
      lastName: this.ln,
      phone_number: this.pn,
      building: this.building,
      unit: this.unit
    })
  }

  requestInfoChange() {
    let fValues = Object.keys(this.userEditForm.value);
    fValues.forEach(v => {
      if ((this.data.user as any)[v] !== this.userEditForm.value[v]) {
        this.data.changeRequested[v] = this.userEditForm.value[v];
      }
    });

    this.dialogRef.close(this.data.changeRequested);
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
