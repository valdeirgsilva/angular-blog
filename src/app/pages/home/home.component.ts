import { Component, OnInit } from '@angular/core';
import { dataFake } from 'src/app/data/dataFake';
import { Article } from 'src/app/data/model/Article';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  main: Article | null = null;
  others: Article[] | null = null;

  constructor() { }

  ngOnInit(): void {
   this.getArticles();
  }

  getArticles() {
    this.main = dataFake[0];
    this.others = dataFake.slice(1);
  }
}
