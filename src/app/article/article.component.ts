import { Component, OnInit, Input } from '@angular/core';

import { Article } from '../article';
import { Multimedia } from '../multimedia';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @Input() article: Article;

  constructor() { }

  ngOnInit() {
  }

  parseImage(article: Article): string {

    let url = "https://www.nytimes.com/";

    if (!article) {
      return url;
    }
    const item: Multimedia[] = article.multimedia;
    const totalItem = item && item.length ? item.length : 0;
    for (let i = (totalItem - 1); i >= 0; i--) {
      if (item[i] && item[i].url && item[i].crop_name == "tmagArticle") {
        return url + item[i].url;
      }
    }
  }

}
