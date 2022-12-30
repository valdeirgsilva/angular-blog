import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  photoCover: string = "https://criticalhits.com.br/wp-content/uploads/2019/10/tony-stark.jpg";
  contentTitle: string = "MINHA NOTÍCIA";
  contentDescription: string = "Olá mundo!";

  constructor() { }

  ngOnInit(): void {
  }

}
