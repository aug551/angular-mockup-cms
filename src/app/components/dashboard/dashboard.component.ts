import { Component, OnInit, Input } from '@angular/core';
import { CaseService } from 'src/app/services/case/case.service';
import { User } from 'src/app/services/users.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  @Input() user!: User;
  dataSource: any;

  constructor(private casesService: CaseService) { }

  ngOnInit(): void {
    this.dataSource = this.casesService.getCasesByRequestedUser(this.user.id!);
    console.log(this.dataSource);
  }

  displayedColumns: string[] = ['number', 'short_description', 'status']

}
