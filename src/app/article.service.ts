import { Injectable } from '@angular/core';
import {Observable, Subscription, Subject } from 'rxjs';

import { HttpClient, HttpHeaders, HttpRequest} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  myKey = "VLfYsj13XM5RnmcGiGif1VDMdABcGE4e";

  constructor(private httpClient: HttpClient) { }

  getAllArticles(search: string, offset:number): Observable<any>  {
    // return this.httpClient.get("https://api.nytimes.com/svc/topstories/v2/home.json?fq="+ search + "&api-key=" + this.myKey);
    return this.httpClient.get("https://api.nytimes.com/svc/search/v2/articlesearch.json?sort=newest&page="+offset+"&fq="+ search + "&api-key=" + this.myKey);
  }

}
