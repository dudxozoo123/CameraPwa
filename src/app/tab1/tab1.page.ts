
import { Component } from '@angular/core';
import { PhotoService } from '../service/photo.service';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public photoService: PhotoService) {}

  async OnInit(){
    this.photoService.addNewToGallery();
  }
}
