import { Component, OnInit, ViewChild } from '@angular/core';
import { NgxMasonryComponent, NgxMasonryOptions } from 'ngx-masonry';
import { Book } from '../models/book.model';
import { BOOKS } from '../static/data/books';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  allBooks: Book[] = BOOKS;
  public masonryOptions: NgxMasonryOptions = {
    gutter: 20,
  };
  @ViewChild(NgxMasonryComponent) masonry: NgxMasonryComponent;

  
  constructor() { }

  ngOnInit(): void {

  }
  public itemsLoaded() {
    console.log('itemsloaded');
  }

}
