import { Component, OnInit } from '@angular/core';
import { Case, CaseService } from '../services/case/case.service';

@Component({
  selector: 'app-contractor-page',
  templateUrl: './contractor-page.component.html',
  styleUrls: ['./contractor-page.component.scss']
})
export class ContractorPageComponent implements OnInit {
  href = window.location.href;
  queryString = this.href.split('?')[1];
  caseId = this.queryString.split('=')[1];
  case!: Case;


  constructor(private caseService: CaseService) { }

  ngOnInit(): void {
    this.case = this.caseService.getCasesById(this.caseId)[0];

  }

}
