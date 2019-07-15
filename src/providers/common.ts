import { Injectable } from '@angular/core';
import { LoadingController } from 'ionic-angular';
import {DomSanitizer} from "@angular/platform-browser";
/*
  Generated class for the Common provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Common {
    public loader: any;
    constructor(public loadingCtrl: LoadingController, private sanitizer: DomSanitizer) {
        console.log('Hello Common Provider');
    }
    getProgressBar(percentaje){
        let html: string = '<img src="assets/imgs/dashboard-logo.png" style="">'+'       <h3 >Loading...</h3>' +
            '<progress text-center  style="margin-left: 20%" value="'+percentaje+'" max="100"></progress>';
        return this.sanitizer.bypassSecurityTrustHtml(html);
    }
    presentLoading(){
        this.loader = this.loadingCtrl.create({spinner: 'hide',

            cssClass: 'custom-loading'})
        // this.loader = this.loadingCtrl.create({content: "Please wait ...",duration: 5000, cssClass: 'custom-loading'})
        this.loader.present();
        let counter: number = 0;
        let interval = setInterval(() => {
            this.loader.data.content = this.getProgressBar(counter);
            counter++;
            if (counter == 95) {
                // this.loader.dismiss();
                clearInterval(interval);
            }
        }, 40);
    }

    closeLoading(){
        this.loader.dismiss();
    }

}
