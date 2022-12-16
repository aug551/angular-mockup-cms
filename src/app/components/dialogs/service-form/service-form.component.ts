import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDatepicker } from '@angular/material/datepicker';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Case, CaseService } from 'src/app/services/case/case.service';
import { Contractor, ContractorsService } from 'src/app/services/contractors/contractors.service';
import { User } from 'src/app/services/users.service';
import { Service } from '../../services/services.component';

@Component({
  selector: 'app-service-form',
  templateUrl: './service-form.component.html',
  styleUrls: ['./service-form.component.scss']
})
export class ServiceFormComponent implements OnInit {
  requestedBy = new FormControl(this.data.user.firstName + " " + this.data.user.lastName);
  serviceType = new FormControl(this.data.service.name + "");
  building = new FormControl(this.data.user.building);
  unit = new FormControl(this.data.user.unit);
  assignedContractor = new FormControl(0);
  description = new FormControl("", [Validators.required]);

  contractors: Contractor[] = [];
  selectedContractor: number = 0;

  caseForm!: FormGroup;

  constructor(public dialogRef: MatDialogRef<ServiceFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { service: Service, user: User },
    private contractorsService: ContractorsService,
    private casesService: CaseService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.contractorsService.getContractors().subscribe((contractors) => {
      this.contractors = contractors.filter(contractor =>
        contractor.services.includes(this.data.service.id));
    })

    this.caseForm = this.formBuilder.group({
      requestedBy: this.requestedBy,
      serviceType: this.serviceType,
      building: this.building,
      unit: this.unit,
      assignedContractor: this.assignedContractor,
      description: this.description,
    });

  }

  submitCase() {
    let today = new Date().getTime();

    if (this.assignedContractor.value == 0) {
      this.assignedContractor.setValue(this.contractors[0].id);
    }

    this.casesService.addCase(this.data.user.id!, this.data.service.id,
      this.assignedContractor.value as number, this.building.value as string, this.unit.value as string,
      this.description.value as string, "Open", today);

    this.dialogRef.close();
  }

}
