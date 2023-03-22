import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddewComponent } from './addew.component';

describe('AddewComponent', () => {
  let component: AddewComponent;
  let fixture: ComponentFixture<AddewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
