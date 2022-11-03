import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { User } from 'src/app/services/users.service';
import { ServiceFormComponent } from '../dialogs/service-form/service-form.component';
import { ServiceCategory, ServicesService } from 'src/app/services/services/services.service';

export interface Service {
  id: number,
  name: string,
  category: number[],
  description: string,
}

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})

export class ServicesComponent implements OnInit {
  @Input() user !: User;
  categories: ServiceCategory[] = [];
  services: Service[] = [];

  setCategoryActive(catIndex: string) {
    document.getElementById(catIndex)?.classList.remove('makeSmall');
    document.getElementById(catIndex)?.classList.add('active');
  }

  setCategoryInactive(catIndex: string) {
    document.getElementById(catIndex)?.classList.remove('active');
    document.getElementById(catIndex)?.classList.add('makeSmall');
  }

  constructor(public dialog: MatDialog, private servicesService: ServicesService) { }

  ngOnInit(): void {
    this.servicesService.getCategories().subscribe((categories) => {
      this.categories = categories;
    })
    this.servicesService.getServices().subscribe((services) => {
      this.services = services;
    })
  }


  openCase(service: Service, user: User) {
    const dialogRef = this.dialog.open(ServiceFormComponent, {
      width: '60%',
      data: { service, user }
    });

    dialogRef.afterClosed().subscribe(result => {
    })
  }
}
