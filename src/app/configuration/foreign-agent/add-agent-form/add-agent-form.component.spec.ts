import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAgentFormComponent } from './add-agent-form.component';

describe('AddAgentFormComponent', () => {
  let component: AddAgentFormComponent;
  let fixture: ComponentFixture<AddAgentFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAgentFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAgentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
