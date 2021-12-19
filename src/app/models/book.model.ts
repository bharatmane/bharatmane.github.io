export class Book
{
    public id:number;
    public coverPageUrl:string;
    public title:string;
    public category:string;
    public description?:string;
    public buyingURL?:string;

    constructor(id:number,coverPageUrl:string,title:string,category:string,description?:string,buyingURL?:string)
    {
        this.id = id;
        this.coverPageUrl = coverPageUrl;
        this.title = title;
        this.category = category;
        this.description = description;
        this.buyingURL = buyingURL;
    }
}
