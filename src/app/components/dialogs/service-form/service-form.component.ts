import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Contractor, ContractorsService } from 'src/app/services/contractors/contractors.service';
import { User } from 'src/app/services/users.service';
import { Service } from '../../services/services.component';

@Component({
  selector: 'app-service-form',
  templateUrl: './service-form.component.html',
  styleUrls: ['./service-form.component.scss']
})
export class ServiceFormComponent implements OnInit {
  contractors: Contractor[] = [];
  selectedContractor: number = 0;

  constructor(public dialogRef: MatDialogRef<ServiceFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { service: Service, user: User },
    private contractorsService: ContractorsService) { }

  ngOnInit(): void {
    this.contractorsService.getContractors().subscribe((contractors) => {
      this.contractors = contractors.filter(contractor =>
        contractor.services.includes(this.data.service.id));
    })
  }

}
