import { Component, OnInit } from '@angular/core';
import{discs} from '../discs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  discs = discs;

  constructor() { }

  ngOnInit() {
  }

}