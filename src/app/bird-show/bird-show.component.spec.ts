import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BirdShowComponent } from './bird-show.component';

describe('BirdShowComponent', () => {
  let component: BirdShowComponent;
  let fixture: ComponentFixture<BirdShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BirdShowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BirdShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
