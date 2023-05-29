import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocuymentUploadComponent } from './docuyment-upload.component';

describe('DocuymentUploadComponent', () => {
  let component: DocuymentUploadComponent;
  let fixture: ComponentFixture<DocuymentUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocuymentUploadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocuymentUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
