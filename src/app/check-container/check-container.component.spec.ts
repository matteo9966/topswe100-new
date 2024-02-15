import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckContainerComponent } from './check-container.component';

describe('CheckContainerComponent', () => {
  let component: CheckContainerComponent;
  let fixture: ComponentFixture<CheckContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CheckContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
