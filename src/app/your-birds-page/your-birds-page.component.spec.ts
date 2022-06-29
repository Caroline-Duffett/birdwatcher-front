import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourBirdsPageComponent } from './your-birds-page.component';

describe('YourBirdsPageComponent', () => {
  let component: YourBirdsPageComponent;
  let fixture: ComponentFixture<YourBirdsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YourBirdsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YourBirdsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
