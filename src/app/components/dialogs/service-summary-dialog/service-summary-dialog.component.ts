import { Component, Inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Contractor, ContractorsService } from 'src/app/services/contractors/contractors.service';
import { ServicesService } from 'src/app/services/services/services.service';
import { User, UsersService } from 'src/app/services/users.service';
import { Service } from '../../services/services.component';

@Component({
  selector: 'app-service-summary-dialog',
  templateUrl: './service-summary-dialog.component.html',
  styleUrls: ['./service-summary-dialog.component.scss']
})
export class ServiceSummaryDialogComponent implements OnInit {
  requestedBy!: User;
  typeOfService!: Service;
  assignedContractors!: Contractor;
  comments: { created_on: string, created_by: Contractor | User, comment: string }[];

  constructor(public dialogRef: MatDialogRef<ServiceSummaryDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { case: any }) {
    this.comments = [];
  }

  ngOnInit(): void {


  }


}
