import { Component, OnInit, ViewChild } from '@angular/core';
import { NgxMasonryComponent, NgxMasonryOptions } from 'ngx-masonry';
import { Book } from '../models/book.model';
import { BOOKS } from '../static/data/books';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  title = 'Bharat Mane: Must Read Books';

  allBooks: Book[] = BOOKS;
  public masonryOptions: NgxMasonryOptions = {
    gutter: 20,
  };
  @ViewChild(NgxMasonryComponent) masonry: NgxMasonryComponent;

  
  constructor(private titleService: Title, private metaService: Meta) {
    this.titleService.setTitle(this.title);
    this.metaService.addTags([
      {name: 'keywords', content: 'Books, Software Craftsmanship, Must Read'},
      {name: 'description', content: 'This is a crafted list of awesome Software craftsmanship resources to help others learn the craft'},
      {name: 'og:image', content: 'https://bharatmane.com/assets/images/must-read.jpg'},
      {name: 'robots', content: 'index, follow'}
    ]);
  }

  ngOnInit(): void {

  }
  public itemsLoaded() {
    console.log('itemsloaded');
  }

}
