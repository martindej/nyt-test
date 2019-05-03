import { Injectable } from '@angular/core';
import {Observable, Subscription, Subject } from 'rxjs';
import { HttpClient, HttpHeaders, HttpRequest} from '@angular/common/http';

import { Article } from './article';
import { Multimedia } from './multimedia';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  myKey = "VLfYsj13XM5RnmcGiGif1VDMdABcGE4e";

  listArticle;
  listArticleChange: Subject<Article[]> = new Subject<Article[]>();

  constructor(private httpClient: HttpClient) { }

  getAllArticles(search: string, offset:number, order:string)  {
    // return this.httpClient.get("https://api.nytimes.com/svc/topstories/v2/home.json?fq="+ search + "&api-key=" + this.myKey);
    this.httpClient.get("https://api.nytimes.com/svc/search/v2/articlesearch.json?sort="+order+"&page="+offset+"&fq="+ search + "&api-key=" + this.myKey)
      .subscribe(
        data => {
          console.log(data);
          if(offset == 0) {
            this.listArticle = data.response.docs;
          }
          else {
            for(let i in data.response.docs) {
              this.listArticle.push(data.response.docs[i])
            }
          }
          this.listArticleChange.next(this.listArticle);
        }
      )
  }

  getArticleById(id:string) {
    return this.listArticle.find(x => x._id === id);
  }

}
