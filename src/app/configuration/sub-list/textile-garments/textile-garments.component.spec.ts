import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextileGarmentsComponent } from './textile-garments.component';

describe('TextileGarmentsComponent', () => {
  let component: TextileGarmentsComponent;
  let fixture: ComponentFixture<TextileGarmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextileGarmentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextileGarmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
