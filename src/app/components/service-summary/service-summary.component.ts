import { Component, OnInit, Input } from '@angular/core';
import { Case } from 'src/app/services/case/case.service';
import { Contractor, ContractorsService } from 'src/app/services/contractors/contractors.service';
import { ServicesService } from 'src/app/services/services/services.service';
import { User, UsersService } from 'src/app/services/users.service';
import { Service } from '../services/services.component';

@Component({
  selector: 'app-service-summary',
  templateUrl: './service-summary.component.html',
  styleUrls: ['./service-summary.component.scss']
})
export class ServiceSummaryComponent implements OnInit {
  @Input() case!: any;
  @Input() view = "tenant";
  requestedBy!: User;
  typeOfService!: Service;
  assignedContractors!: Contractor;
  comments: { created_on: string, created_by: Contractor | User, comment: string }[];
  statusOpts = [
    { value: 'wip', viewValue: 'WIP' },
    { value: 'open', viewValue: 'Open' },
    { value: 'on_hold', viewValue: 'On Hold' },
    { value: 'cancelled', viewValue: 'Cancelled' },
    { value: 'closed', viewValue: 'Closed' }
  ];


  constructor(private usersService: UsersService,
    private servicesService: ServicesService,
    private contractorsService: ContractorsService) {
    this.comments = [];
  }

  ngOnInit(): void {
    this.requestedBy = this.usersService.getUserById(this.case.requestedBy);
    this.typeOfService = this.servicesService.getServiceById(this.case.typeOfService);
    this.assignedContractors = this.contractorsService.getContractorById(this.case.assignedContractors);

    this.updateComments()
  }

  updateComments() {
    this.comments = [];

    this.case.journal.sort((a: any, b: any) => {
      return b.created_on - a.created_on;
    });

    // this.comments.sort((a, b): any => {
    //   let ad = new Date(a.created_on);
    //   let bd = new Date(b.created_on);
    //   return bd.getTime() - ad.getTime();
    // });

    if (this.case.journal)
      this.case.journal.forEach((comment: any) => {
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

    this.case.journal.push(commentObj);
    this.updateComments();
  }

}
