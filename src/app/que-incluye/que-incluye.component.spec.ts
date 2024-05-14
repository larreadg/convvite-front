import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueIncluyeComponent } from './que-incluye.component';

describe('QueIncluyeComponent', () => {
  let component: QueIncluyeComponent;
  let fixture: ComponentFixture<QueIncluyeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QueIncluyeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QueIncluyeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
