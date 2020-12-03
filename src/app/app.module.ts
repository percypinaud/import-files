import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UploadComponent } from './components/upload/upload.component';
import { ListComponent } from './components/list/list.component';
import { DataService } from './services/data.component.service';
import { HttpClientModule } from '@angular/common/http';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { UploadService } from './services/upload.component.service';
import {NgxFilesizeModule} from 'ngx-filesize';

@NgModule({
  declarations: [
    AppComponent,
    UploadComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    DragDropModule,
    ScrollingModule,
    NgxDropzoneModule,
    NgxFilesizeModule
  ],
  providers: [DataService,UploadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
