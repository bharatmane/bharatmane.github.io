import { Component,ViewChild } from '@angular/core';
import { Quote } from '../models/quote.model';
import { QUOTES } from '../static/data/quotes';
import { NgxMasonryOptions, NgxMasonryComponent } from 'ngx-masonry';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})


export class QuotesComponent {
  public masonryOptions: NgxMasonryOptions = {
    gutter: 10,
  };
  @ViewChild(NgxMasonryComponent) masonry: NgxMasonryComponent;

  quotes: Quote[];

  ngOnInit(): void {
    this.quotes = QUOTES.filter(q => q.year == "2021");
  }

  showQuotesForYear(year: any,htmlAnchorTab:any) {
    this.quotes = QUOTES.filter(q => q.year == year);
    this.masonry.reloadItems();
    this.masonry.layout();
  }

}
