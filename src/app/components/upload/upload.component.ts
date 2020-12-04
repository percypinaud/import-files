import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UploadService } from 'src/app/services/upload.component.service';
import { ListComponent } from '../list/list.component';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})

export class UploadComponent implements AfterViewInit {
  
  @ViewChild(ListComponent) lista!: ListComponent;

  files: File[] = [];

  constructor(private uploadService:UploadService,private toastrService:ToastrService) {}

  ngAfterViewInit () {
    this.lista.listarDatos();
  }

  onSelect(event:any) {
      this.files.push(...event.addedFiles);
      var formData = new FormData();
  
      for (var i = 0; i < this.files.length; i++) { 
        formData.append("files", this.files[i]);
      }
      
      this.uploadService.saveFile(formData).subscribe(res => {
        this.files = [];
        this.showSuccess();
        this.ngAfterViewInit();
      });
  }

  onRemove(event:any) {
    this.files.splice(this.files.indexOf(event), 1);
  }

  showSuccess(){
    this.toastrService.success("Los archivos se guardaron","Registro Exitoso!");
  }
}
