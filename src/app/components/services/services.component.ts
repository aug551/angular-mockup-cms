import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { User } from 'src/app/services/users.service';


interface Service {
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

  categoriesExample = [
    {
      name: 'CLEANING',
      description: 'Cleaning services'
    },
    {
      name: 'MAINTENANCE',
      description: 'Maintenance services'
    },
    {
      name: 'REPAIR',
      description: 'Repair services'
    }, {
      name: 'OTHER',
      description: 'Other services'
    }];

  servicesExample: Service[] = [
    { name: 'General Cleaning', category: [0], description: 'General cleaning for homes.' },
    { name: 'Big Furniture Discarding', category: [0], description: 'For help with throwing out big items, furnitures.' },
    { name: 'Laundry/Washing', category: [0], description: 'For big loads of laundry or carpet cleaning.' },
    { name: 'Electrical/Wiring', category: [1], description: 'For help with wiring or electrical sockets (lights, plugs, etc).' },
    { name: 'Appliance Installation/Repair', category: [1, 2], description: 'Help with installing a new appliance (refrigerator, dishwasher, stove, etc.)' },
    { name: 'Wall Painting', category: [1, 2], description: 'For painting or repainting' },
    { name: 'Wall Repair', category: [2], description: 'Dry wall, insulation, etc.' },
    { name: 'General repair', category: [2], description: 'Repair for anything: windows, ceiling, flooring, etc.' },
    { name: 'Other', category: [3], description: 'Other services' },
    { name: 'Suggestion', category: [3], description: 'Suggest a service to be added to the list.' }
  ]


  setCategoryActive(catIndex: string) {
    // let cats = document.querySelectorAll('.category');
    // cats.forEach(cat => {
    //   if (cat.classList.contains('active'))
    //     cat.classList.remove('active');
    // });

    document.getElementById(catIndex)?.classList.remove('makeSmall');
    document.getElementById(catIndex)?.classList.add('active');
  }

  setCategoryInactive(catIndex: string) {
    document.getElementById(catIndex)?.classList.remove('active');
    document.getElementById(catIndex)?.classList.add('makeSmall');
  }

  constructor() { }

  ngOnInit(): void {
  }

}
