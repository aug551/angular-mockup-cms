import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Case, CaseService } from 'src/app/services/case/case.service';
import { User, UsersService } from 'src/app/services/users.service';
import { ServiceSummaryDialogComponent } from '../dialogs/service-summary-dialog/service-summary-dialog.component';
import { UserProfileDialogComponent } from '../dialogs/user-profile-dialog/user-profile-dialog.component';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  @Input() user!: User;
  changeRequested: any = {};
  hasChanges: Boolean = false;

  constructor(private casesService: CaseService, public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  editUser() {
    const dialogRef = this.dialog.open(UserProfileDialogComponent, {
      width: '60%',
      data: { user: this.user, changeRequested: this.changeRequested }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (!result) return;
      let wasChanged = false;
      Object.keys(result).forEach(res => {
        if (result[res] != (this.user as any)[res]) {
          this.changeRequested = result;
          this.hasChanges = true;
          wasChanged = true;
        }
      });

      if (!wasChanged) {
        this.hasChanges = false;
        this.changeRequested = {};
      }
    });
  }
}
