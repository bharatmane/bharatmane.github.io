export class BlogPost
{
    public id:BigInteger;
    public date:Date;
    public title:string;
    public url:string;
    public content:string;
    public excerpt:string;
    public featuredImage:string;

    constructor(id:BigInteger,date:Date,title:string,url:string,content:string,excerpt:string, featuredImage:string)
    {
       this.id = id;
       this.date = date;
       this.title = title;
       this.url = url;
       this.content = content;
       this.excerpt = excerpt;
       this.featuredImage = featuredImage;
    }
}
