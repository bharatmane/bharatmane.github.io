import { Observable } from "rxjs";


export class BlogServiceMock {
  

  getBlogs()
  {
    
    return []
    
  }

  getRssFeedFromMedium()
  {
    return [];
    
  }


  getMessage():Observable<any>{
    return new Observable<any>();
  }

  
  clearMessage(){
    
  }

  sendMessage(message:string){
    
  }
  
}
