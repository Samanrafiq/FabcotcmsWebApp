import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForeignAgentComponent } from './foreign-agent.component';

describe('ForeignAgentComponent', () => {
  let component: ForeignAgentComponent;
  let fixture: ComponentFixture<ForeignAgentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForeignAgentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForeignAgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
