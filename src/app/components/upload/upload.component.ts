import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { UploadService } from 'src/app/services/upload.component.service';
import { ListComponent } from '../list/list.component';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})

export class UploadComponent implements OnInit{
  
  files: File[] = [];
  registrado : boolean = false;

  constructor(private uploadService:UploadService ) {}

  ngOnInit(): void {
  }

  onSelect(event:any) {
      console.log(event);
      this.files.push(...event.addedFiles);
      var formData = new FormData();
  
      for (var i = 0; i < this.files.length; i++) { 
        formData.append("files", this.files[i]);
      }
      
      this.uploadService.saveFile(formData).subscribe(res => {
        alert("Guardado exitosamente!");
        this.registrado = true;
      });
  }

  onRemove(event:any) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }

}
