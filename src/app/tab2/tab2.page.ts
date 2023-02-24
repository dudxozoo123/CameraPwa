import { Component } from '@angular/core';
import { PhotoService } from '../service/photo.service';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public photoService: PhotoService) {}
  OnInit(){
  }
  addPhotoToGallery(){
    this.photoService.addNewToGallery();
  }
}
