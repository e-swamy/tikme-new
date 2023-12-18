import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchJumbotronComponent } from './branch-jumbotron.component';

describe('BranchJumbotronComponent', () => {
  let component: BranchJumbotronComponent;
  let fixture: ComponentFixture<BranchJumbotronComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BranchJumbotronComponent]
    });
    fixture = TestBed.createComponent(BranchJumbotronComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
