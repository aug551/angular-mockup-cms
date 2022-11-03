import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceSummaryDialogComponent } from './service-summary-dialog.component';

describe('ServiceSummaryDialogComponent', () => {
  let component: ServiceSummaryDialogComponent;
  let fixture: ComponentFixture<ServiceSummaryDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceSummaryDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceSummaryDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
