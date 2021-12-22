import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,Subject  } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BlogService {
private subject= new Subject<any>();
  
  constructor(private httpClient:HttpClient) { }
  
  baseUrl = "https://public-api.wordpress.com/rest/";
  postUrl = "v1/sites/bharatmane.wordpress.com/posts";
  rss2jsonURL ="https://api.rss2json.com/v1/api.json";
  mediumRssFeedUrl = "https://bharatmane.medium.com/feed";

  getBlogs()
  {
    
    return this.httpClient.get(this.baseUrl + this.postUrl);
    
  }

  getRssFeedFromMedium()
  {
    return this.httpClient.get(this.rss2jsonURL + "?rss_url=" + this.mediumRssFeedUrl);
    
  }


  getMessage():Observable<any>{
    return this.subject.asObservable();
  }

  
  clearMessage(){
    this.subject.next();
  }

  sendMessage(message:string){
    this.subject.next({text:message});
  }
  
}
