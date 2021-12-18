import { AlbumItem } from "./albumItem.model";

export class Album
{
    public id:number;
    public name:string;
    public year:number;
    public category:string;
    public coverImageUrl:string;
    public opened?: boolean;
    public items:AlbumItem[];

    constructor(id:number,name:string,year:number,category:string,coverImageUrl:string,items:AlbumItem[])
    {
       this.id = id;
       this.name = name;
       this.year = year;
       this.category = category;
       this.coverImageUrl = coverImageUrl;
       this.items = items;
    }
}

export class AlbumImage
{
    public albumId:number;
    public isCoverImage:boolean;
    public imageUrl:string;
    constructor(albumId:number,isCoverImage:boolean,url:string)
    {
        this.albumId = albumId;
        this.isCoverImage = isCoverImage;
        this.imageUrl = url;

    }
}


   