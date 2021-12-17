import { Component, OnInit, ViewChild } from '@angular/core';
import { BlogPost } from '../models/blogPost.model';
import { BlogService } from '../services/blog.service';
import { EXCERPTS } from '../static/data/excerpts';
import { forkJoin } from 'rxjs';
import { NgxMasonryOptions, NgxMasonryComponent } from 'ngx-masonry';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  allPost: BlogPost[] = [];
  blogPosts: any;
  mediumBlogPosts: any;
  constructor(private blogService: BlogService) { }
  public masonryOptions: NgxMasonryOptions = {
    gutter: 20,
  };
  @ViewChild(NgxMasonryComponent) masonry: NgxMasonryComponent;

  masonryImages: any;
  
  limit = 15;
   


  ngOnInit(): void {
    let mediumBlogs = this.blogService.getRssFeedFromMedium();
    let wordpressBlogs = this.blogService.getBlogs();

    forkJoin([mediumBlogs, wordpressBlogs]).subscribe(results => {
      this.processMediumBlogs(results[0]);
      this.prpocessWordpressBlogs(results[1]);

    });
  }
  getExcerptFromContent(content: any): string {
    let doc = new DOMParser().parseFromString(content, 'text/html')
    let excerpt = "";
    if (doc != null && doc.querySelector('p') != null) {
      var pTags = doc.getElementsByTagName('p');

      for (let pTag of pTags) {
        if (pTag.innerText.startsWith('This article')) {
          excerpt = pTag.innerText;
          break;
        }
      }
    }
    return excerpt;
  }
  getExcerptFromStaticResource(title: string): string {
    return EXCERPTS.get(title)!;

  }
  processMediumBlogs(blogs: any) {
    for (let blog of blogs.items) {
      var excerpt = "";
      if (EXCERPTS.has(blog.title)) {
        excerpt = this.getExcerptFromStaticResource(blog.title)!;
      } else {
        excerpt = this.getExcerptFromContent(blog.content)!;
      }
      this.allPost.push(new BlogPost(blog.ID, new Date(blog.pubDate), blog.title, blog.link, '', excerpt, blog.thumbnail));
    }
  }

  prpocessWordpressBlogs(blogs: any) {
    for (let blog of blogs.posts) {
      this.allPost.push(new BlogPost(blog.ID, new Date(blog.date), blog.title, blog.URL, '', blog.excerpt, blog.featured_image));
    }

  }
  showMoreImages() {
   //TODO: add more images
  }

  insertImage() {
    //TODO: add more images
  }
  prependImage() {
    //TODO: add more images
  }

  removeImage() {
    this.masonryImages.pop();
  }

  itemsLoaded() {
    console.log('itemsloaded');
  }

}

