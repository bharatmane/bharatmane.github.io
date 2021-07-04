import { Component, OnInit } from '@angular/core';
import { BlogPost } from '../models/blogPost.model';
import { BlogService } from '../services/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
 blogPosts:any;

  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.blogService.getBlogs().subscribe(blogs=>{
      this.blogPosts = blogs;
    });
    }
  
}
