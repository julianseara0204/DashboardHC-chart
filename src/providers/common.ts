import { Injectable } from '@angular/core';
import { LoadingController } from 'ionic-angular';

/*
  Generated class for the Common provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Common {
  public loader: any;
  constructor(public loadingCtrl: LoadingController) {
    console.log('Hello Common Provider');
  }

  presentLoading(){
   this.loader = this.loadingCtrl.create({content: "Please wait ...", cssClass: 'custom-loading'})
   // this.loader = this.loadingCtrl.create({content: "Please wait ...",duration: 5000, cssClass: 'custom-loading'})
  this.loader.present();
  }

  closeLoading(){
  this.loader.dismiss();
  }

}
