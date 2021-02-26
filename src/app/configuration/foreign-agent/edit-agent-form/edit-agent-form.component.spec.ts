import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAgentFormComponent } from './edit-agent-form.component';

describe('EditAgentFormComponent', () => {
  let component: EditAgentFormComponent;
  let fixture: ComponentFixture<EditAgentFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditAgentFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAgentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
