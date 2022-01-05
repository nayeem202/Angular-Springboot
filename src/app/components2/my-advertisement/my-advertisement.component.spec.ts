import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAdvertisementComponent } from './my-advertisement.component';

describe('MyAdvertisementComponent', () => {
  let component: MyAdvertisementComponent;
  let fixture: ComponentFixture<MyAdvertisementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyAdvertisementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyAdvertisementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
