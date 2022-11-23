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
    @Inject(MAT_DIALOG_DATA) public data: { case: any },
    private usersService: UsersService,
    private servicesService: ServicesService,
    private contractorsService: ContractorsService) {
    this.comments = [];
  }

  ngOnInit(): void {
    this.requestedBy = this.usersService.getUserById(this.data.case.requestedBy);
    this.typeOfService = this.servicesService.getServiceById(this.data.case.typeOfService);
    this.assignedContractors = this.contractorsService.getContractorById(this.data.case.assignedContractors);

    this.updateComments()

  }

  updateComments() {
    this.comments = [];
    if (this.data.case.journal)
      this.data.case.journal.forEach((comment: any) => {
        let created_by: Contractor | User;
        if (comment.created_by == this.requestedBy.id) {
          // is a user
          created_by = this.requestedBy;
        }
        else {
          created_by = this.contractorsService.getContractorById(comment.created_by);
        }
        this.comments.push({
          created_on: new Date(comment.created_on).toDateString(),
          created_by: created_by,
          comment: comment.comment
        });
      });

    this.comments.sort((a, b): any => {
      let ad = new Date(a.created_on);
      let bd = new Date(b.created_on);
      return bd.getTime() - ad.getTime();
    });
  }

  getCommentByName(created_by: Contractor | User) {
    if ((created_by as any).name == undefined) {
      return (created_by as User).firstName + " " + (created_by as User).lastName;
    }
    return (created_by as Contractor).name;
  }

  postComment(newComment: string) {
    let commentObj = {
      created_on: new Date().getTime(),
      created_by: this.requestedBy.id,
      comment: newComment
    };

    this.data.case.journal.push(commentObj);
    this.updateComments();
  }
}
