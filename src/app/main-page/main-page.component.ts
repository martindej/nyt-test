import { Component, OnInit } from '@angular/core';
import {Observable, Subscription, Subject } from 'rxjs';

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
  order:string = "newest";

  private subscriptionAllArticles: Subscription;

  constructor(private articleService: ArticleService) {

    this.allArticles = articleService.listArticle;
    this.subscriptionAllArticles = articleService.listArticleChange.subscribe((value) => {
      this.allArticles = value;
    });
  }

  ngOnInit() {
    this.getAllArticles();
  }

  OnInput(s: string) {
    this.search = s;
    this.offset = 0;
    this.getAllArticles();
  }

  changeOrder(order: string) {
    this.order = order;
    this.getAllArticles();
  }

  displayMore() {
    this.offset = this.offset + 1;
    this.getAllArticles();
  }

  getAllArticles() {
    this.articleService.getAllArticles(this.search, this.offset, this.order);
  }

}
