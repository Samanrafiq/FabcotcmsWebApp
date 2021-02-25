import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForeignExternalAgentsComponent } from './foreign-external-agents.component';

describe('ForeignExternalAgentsComponent', () => {
  let component: ForeignExternalAgentsComponent;
  let fixture: ComponentFixture<ForeignExternalAgentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForeignExternalAgentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForeignExternalAgentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
