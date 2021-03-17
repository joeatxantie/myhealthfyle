import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostdicomComponent } from './postdicom.component';

describe('PostdicomComponent', () => {
  let component: PostdicomComponent;
  let fixture: ComponentFixture<PostdicomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostdicomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostdicomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
