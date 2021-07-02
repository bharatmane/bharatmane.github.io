export class Quote
{
    public quoteUrl:string;
    public year:string;
    public author:string;

    constructor(quoteUrl:string, year:string, author:string)
    {
        this.quoteUrl = quoteUrl;
        this.year =  year;
        this.author = author;
    }
}