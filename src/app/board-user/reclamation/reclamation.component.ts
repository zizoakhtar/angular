import { Component, OnInit } from '@angular/core';
import {StageService} from '../../_services/stage.service';
import {TokenStorageService} from '../../_services/token-storage.service';
import {Router} from '@angular/router';
import {HttpEventType, HttpResponse} from '@angular/common/http';

@Component({
  selector: 'app-reclamation',
  templateUrl: './reclamation.component.html',
  styleUrls: ['./reclamation.component.css']
})
export class ReclamationComponent implements OnInit {
  constructor( private uploadService: StageService, private tokenStorageService: TokenStorageService, private router:Router) {
  }
  description: string;
  obj:string;
  roles: string[];
  isLoggedIn = false;
  username: string;
  id: number;
  isSuccessful = false;

  display = false;
  val1: number;

  val2 = 5;

  val3: number;

  val4 = 5;

  val5: number;

  msg: string;
  ngOnInit() {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;
      this.username = user.username;
      this.id = user.id;
    }}

  selectedFiles: FileList;
  currentFile: File;
  progress = 0;
  message = '';

  currentFileUpload: File;
  addavis() {
    this.progress = 0;
    this.currentFileUpload = this.selectedFiles.item(0);
    this.uploadService.rec(this.obj,this.description,this.currentFileUpload , this.id ).subscribe((event:any) => {
        if (event.type === HttpEventType.UploadProgress) {
          this.progress= Math.round(100 * event.loaded / event.total);

        }  else if (event instanceof HttpResponse) {
          this.message = event.body.message;
        }

        this.isSuccessful=true;

      },
      err => {
        this.progress = 0;
        this.message = 'Could not upload the file!';
        this.currentFile = undefined;
      });
    this.selectedFiles = undefined;
  }

  // latest snapshot
  public imagePath;
  imgURL: any;
  fileName:any;
  selectFile(event:any): void {
    this.selectedFiles = event.target.files;
    console.log(this.selectedFiles.item(0).name);
    this.selectedFiles = event.target.files;

    if (event.target.files.length > 0) {
      const file = event.target.files[0];


      var reader = new FileReader();

      this.imagePath = file;
      reader.readAsDataURL(file);
      reader.onload = (_event) => {
        this.imgURL = reader.result;
      }


    }
      }

  showBasicDialog() {
    this.display = true;
  }
  handleRate(event) {
    this.msg = 'You have rated ' + event.value;
  }

  handleCancel(event) {
    this.msg = 'Rating Cancelled';
  }
}
