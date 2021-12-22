import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BlogService } from './blog.service';

describe('BlogService', () => {
  let service: BlogService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({imports: [ HttpClientTestingModule ]});
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(BlogService) as jasmine.SpyObj<BlogService>;
    console.log(service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
