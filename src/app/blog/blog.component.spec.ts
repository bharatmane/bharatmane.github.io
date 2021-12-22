import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BlogServiceMock } from '../mock/BlogServiceMock';
import { BlogService } from '../services/blog.service';

import { BlogComponent } from './blog.component';

describe('BlogComponent', () => {
  let component: BlogComponent;
  let service: BlogService;
  let fixture: ComponentFixture<BlogComponent>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
        declarations: [
          BlogComponent
        ],
        providers: [
            { provide: BlogService, useClass: BlogServiceMock }
        ]
    }).compileComponents().then(() => {
        fixture = TestBed.createComponent(BlogComponent);
        component = fixture.componentInstance; 
    });
});


  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
