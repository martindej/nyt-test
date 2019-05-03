import { Component, OnInit } from '@angular/core';

import { ArticleService } from '../article.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  allArticles;
  search: string;
  offset: number = 0;

  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    this.getAllArticles();
  }

  OnInput(s: string) {
    this.search = s;
    this.offset = 0;
    this.getAllArticles();
  }

  displayMore() {
    this.offset = this.offset + 1;
    this.getAllArticles();
  }

  getAllArticles() {
    this.articleService.getAllArticles(this.search, this.offset)
      .subscribe(
        data => {
          console.log(data);
          if(this.offset == 0) {
            this.allArticles = data.response.docs;
          }
          else {
            for(let i in data.response.docs) {
              this.allArticles.push(data.response.docs[i])
            }
          }
        }
      )
  }

}
