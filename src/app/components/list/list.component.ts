import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { DataService } from 'src/app/services/data.component.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public files : any = [];

  constructor(private dataService:DataService) { 
  }
 
  ngOnInit(): void {
  }

  onDropped(event:CdkDragDrop<any>) {
    const anterior = event.previousIndex;
    const actual = event.currentIndex;
    moveItemInArray(this.files,anterior,actual);
  }

  listarDatos(){
    this.dataService.getAllFiles().subscribe(res => {
      this.files = res.data;
    });
  }
}
