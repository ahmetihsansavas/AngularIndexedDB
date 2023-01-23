import { Component } from '@angular/core';
import { NgxIndexedDBService } from 'ngx-indexed-db';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss']
})
export class ExampleComponent {
constructor(private dbService: NgxIndexedDBService){ 
  this.dbService
  .add('people', {
    userId:1,
    pageId:1,
    gridId:2,
    customizationData: {"columns":["saleDate"],"group":["productId", "productName"]},
  })
  .subscribe((key) => {
    console.log('key: ', key);
  });
  this.dbService.getAll('people').subscribe((peoples) => {
  peoples.find((p:any)=> {
    if(p.gridId===2){
      console.log(p);
  }});
  });
  this.dbService.update("people",{
    id:19,
    userId:12,
    pageId:12,
    gridId:22,
    customizationData: {columns:["saleDate"],group:["productId", "productName"]},
  }).subscribe((storeData) => {
    console.log('storeData: ', storeData);
  });
}

}
