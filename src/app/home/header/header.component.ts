import { Component, OnInit } from '@angular/core'; 
import { Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  //currentItem = 'products';
  //item : any;
  // @Output() itemEvent = new EventEmitter<string>();
  // addNewItem(value: string){
  //   this.itemEvent.emit(this.item);
  // }
  
  filteredString : any = '';
  constructor(public _router: Router) { }

  ngOnInit(): void {
  }

}
