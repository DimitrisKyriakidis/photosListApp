import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglePhotoPageComponent } from './single-photo-page.component';

describe('SinglePhotoPageComponent', () => {
  let component: SinglePhotoPageComponent;
  let fixture: ComponentFixture<SinglePhotoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinglePhotoPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SinglePhotoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
