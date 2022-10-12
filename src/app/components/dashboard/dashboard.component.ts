import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/services/users.service';

interface Service {
  number: string,
  short_description: string,
  status: string
}

const servicesExample: Service[] = [
  { number: 'SRV001', short_description: 'Leaking sink', status: 'WIP' },
  { number: 'SRV012', short_description: 'Broken Window', status: 'Open' },
  { number: 'SRV111', short_description: 'Wall repaint', status: 'On Hold' },
]

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  @Input() user!: User;

  constructor() { }

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['number', 'short_description', 'status']
  dataSource = servicesExample;

}
