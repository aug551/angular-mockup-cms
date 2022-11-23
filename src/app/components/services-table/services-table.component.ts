import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Case, CaseService } from 'src/app/services/case/case.service';
import { User } from 'src/app/services/users.service';
import { ServiceSummaryDialogComponent } from '../dialogs/service-summary-dialog/service-summary-dialog.component';

@Component({
  selector: 'app-services-table',
  templateUrl: './services-table.component.html',
  styleUrls: ['./services-table.component.scss']
})
export class ServicesTableComponent {
  @Input() user!: User;
  @Input() displayedColumns!: string[];
  dataSource: any;

  constructor(private casesService: CaseService, public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.dataSource = this.casesService.getCasesByRequestedUser(this.user.id!);
    this.dataSource.sort((a: Case, b: Case) => {
      let case1 = parseInt(a.id.substring(3));
      let case2 = parseInt(b.id.substring(3));

      return case2 - case1;
    });
  }

  openCaseSummary(_case: any) {

    const dialogRef = this.dialog.open(ServiceSummaryDialogComponent, {
      width: '60%',
      data: { case: _case }
    });

    dialogRef.afterClosed().subscribe(result => {

    });
  }

  formatDate(msDate: number) {
    return new Date(msDate).toDateString();
  }
}
