import { Component, OnInit, ViewChild } from '@angular/core';
import { NgxMasonryComponent, NgxMasonryOptions } from 'ngx-masonry';
import { Album, AlbumImage } from '../models/album.mode';
import { CALENDERS } from '../static/data/albums';

@Component({
  selector: 'app-kid-calendar',
  templateUrl: './kid-calendar.component.html',
  styleUrls: ['./kid-calendar.component.css']
})
export class KidCalendarComponent implements OnInit {

  public masonryOptions: NgxMasonryOptions = {
    gutter: 10
  };
  @ViewChild(NgxMasonryComponent) masonry: NgxMasonryComponent;


  albums: Album[];
  albumImages: AlbumImage[] = [];
  visibleAlbums: AlbumImage[] = [];
  isBackButtonHidden: boolean = false;

  ngOnInit(): void {
    for (let album of CALENDERS) {
      this.albumImages.push(new AlbumImage(album.id, true, album.coverImageUrl));
      for (let item of album.items) {
        this.albumImages.push(new AlbumImage(album.id, false, item.url));
      }
    }
    this.visibleAlbums = this.albumImages.filter(i => i.isCoverImage);
    this.albums = CALENDERS;//.filter(q => q.year == "2021");
  }
  public expand(albumId: number) {
    this.isBackButtonHidden = true;
    this.visibleAlbums = this.albumImages.filter(i => i.albumId == albumId);
    this.masonry.layout();
  }

  public showOnlyAlbums() {
    this.isBackButtonHidden = false;
    this.visibleAlbums = this.albumImages.filter(i => i.isCoverImage).sort((a, b) => a.albumId - b.albumId);
    this.masonry.layout();
  }

}
