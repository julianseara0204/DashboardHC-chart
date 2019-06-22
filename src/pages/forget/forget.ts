import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import {LoginPage} from "../login/login";


/**
 * Generated class for the ForgetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-forget',
  templateUrl: 'forget.html',
})
export class ForgetPage {
  resposeData : any;
  userData = {"username":"","lang":"en"};
  constructor(public navCtrl: NavController, public navParams: NavParams , private toastCtrl:ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForgetPage');
  }
    reset(){
        this.navCtrl.push(LoginPage);
    // if(this.userData.username){
    //   this.common.presentLoading();
    //   const credentials = new FormData();
    //   credentials.append('email', this.userData.username);
    //   credentials.append('lang',
    //     'en');
    //   console.log(credentials);
    //   this.authService.postData(credentials, "iworksafely/appapi/json/forgetpassword").then((result) =>{
    //     this.resposeData = result;
    //
    //     this.common.closeLoading();
    //     if(this.resposeData.status==true){
    //       console.log(this.resposeData);
    //       this.presentToast("Password Reset link send to Email");
    //       localStorage.setItem('userData', JSON.stringify(this.resposeData) )
    //       this.navCtrl.push(Login);
    //     }
    //     else{
    //       this.presentToast("Please give valid Email");
    //     }
    //
    //
    //
    //   }, (err) => {
    //     //Connection failed message
    //   });
    // }
    // else{
    //   this.presentToast("Give username and password");
    // }

  }
  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 2000,
      cssClass :'yourClass'
    });
    toast.present();
  }
}

