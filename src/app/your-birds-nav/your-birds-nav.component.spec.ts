import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourBirdsNavComponent } from './your-birds-nav.component';

describe('YourBirdsNavComponent', () => {
  let component: YourBirdsNavComponent;
  let fixture: ComponentFixture<YourBirdsNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YourBirdsNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YourBirdsNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
