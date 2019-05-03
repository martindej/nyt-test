import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ArticleService } from '../article.service';
import { Article } from '../article';
import { Multimedia } from '../multimedia';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.css']
})
export class DetailsPageComponent implements OnInit {

  article: Article;

  constructor(private route: ActivatedRoute, private articleService: ArticleService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.getOneArticle(id);
  }

  getOneArticle(id: string) {
    this.article = this.articleService.getArticleById(id);
    console.log(this.article);
  }

  parseImage(article: Article): string {

    let url = "https://www.nytimes.com/";

    if (!article) {
      return url;
    }
    const item: Multimedia[] = article.multimedia;
    const totalItem = item && item.length ? item.length : 0;
    for (let i = (totalItem - 1); i >= 0; i--) {
      if (item[i] && item[i].url && item[i].crop_name == "articleLarge") {
        return url + item[i].url;
      }
    }
  }

}
