import { Component, OnInit } from '@angular/core';
import { HomeElements } from '../shared/interface/home.interface'


const ELEMENT_DATA: HomeElements[] = [
  {position: 1, name: 'Build: 522', weight: 'Build: 522', symbol: ['Active'] },
  {position: 2, name: 'Build: 522', weight: 'Build: 522', symbol: ['Active'] },
  {position: 3, name: 'Build: 522', weight: 'Build: 522', symbol: ['Pending']},
  {position: 4, name: 'Build: 522', weight: 'Build: 522',symbol: ['Offline']},
  {position: 5, name: 'Build: 522', weight: 'Build: 522', symbol: ['Offline']} ,
  
];


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {


  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit() {
  }

}
