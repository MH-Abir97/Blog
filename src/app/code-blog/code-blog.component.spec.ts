import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeBlogComponent } from './code-blog.component';

describe('CodeBlogComponent', () => {
  let component: CodeBlogComponent;
  let fixture: ComponentFixture<CodeBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodeBlogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodeBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
