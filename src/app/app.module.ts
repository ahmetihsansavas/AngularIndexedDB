import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DBConfig, NgxIndexedDBModule } from 'ngx-indexed-db';
import { ExampleComponent } from './components/example/example.component';

const dbConfig: DBConfig  = {
  name: 'MyDb',
  version: 1,
  objectStoresMeta: [{
    store: 'people',
    storeConfig: { keyPath: 'id', autoIncrement: true },
    storeSchema: [
      { name: 'userId', keypath: 'userId', options: { unique: false } },
      { name: 'pageId', keypath: 'pageId', options: { unique: false } },
      { name: 'gridId', keypath: 'gridId', options: { unique: false } },
      { name: 'customizationData', keypath: 'customizationData', options: { unique: false } }
    ]
  }]
};

@NgModule({
  declarations: [
    AppComponent,
    ExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxIndexedDBModule.forRoot(dbConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
