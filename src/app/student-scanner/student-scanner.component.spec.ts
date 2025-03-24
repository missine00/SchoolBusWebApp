import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentScannerComponent } from './student-scanner.component';

describe('StudentScannerComponent', () => {
  let component: StudentScannerComponent;
  let fixture: ComponentFixture<StudentScannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudentScannerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentScannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
