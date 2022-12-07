import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostedetailsComponent } from './postedetails.component';

describe('PostedetailsComponent', () => {
  let component: PostedetailsComponent;
  let fixture: ComponentFixture<PostedetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostedetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
