import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTeaComponent } from './edit-tea.component';

describe('EditTeaComponent', () => {
  let component: EditTeaComponent;
  let fixture: ComponentFixture<EditTeaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTeaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTeaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
