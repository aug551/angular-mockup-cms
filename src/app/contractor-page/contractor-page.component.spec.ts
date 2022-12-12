import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractorPageComponent } from './contractor-page.component';

describe('ContractorPageComponent', () => {
  let component: ContractorPageComponent;
  let fixture: ComponentFixture<ContractorPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContractorPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContractorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
