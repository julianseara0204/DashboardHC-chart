import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import {LoginPage} from "../login/login";
import {MyApp} from "../../app/app.component";
import {Common} from "../../providers/common";
import {AuthService} from "../../providers/auth-service";

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
  userData = {"username":""};
  constructor(public authService: AuthService,public common: Common,public navCtrl: NavController, public navParams: NavParams , private toastCtrl:ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForgetPage');
  }
    reset() {
        if(this.userData.username){

            this.common.presentLoading();
            var credentials = {};
            this.authService.postData(credentials, "v2/auth/resetPassword/"+this.userData.username).then((result) =>{
                this.resposeData = result;
                console.log(this.resposeData);
                if(this.resposeData.message == 'Success'){
                    console.log(this.resposeData);
                    this.presentToast("Password reset e-mail send!");
                    localStorage.setItem('userData', JSON.stringify(this.resposeData) )
                    this.common.closeLoading();
                    this.navCtrl.setRoot(LoginPage);
                }
                else{
                    this.presentToast("Please give valid username");
                    this.common.closeLoading();
                }



            }, (err) => {
                const myObjStr = JSON.stringify(err);
                //Connection failed message
                this.presentToast("Somthing went wrong,please try again later");
                this.common.closeLoading();
            });
        }
        else{
            this.presentToast("Give username ");
        }

    }
  //   reset(){
  //       this.navCtrl.push(LoginPage);
  //   // if(this.userData.username){
  //   //   this.common.presentLoading();
  //   //   const credentials = new FormData();
  //   //   credentials.append('email', this.userData.username);
  //   //   credentials.append('lang',
  //   //     'en');
  //   //   console.log(credentials);
  //   //   this.authService.postData(credentials, "iworksafely/appapi/json/forgetpassword").then((result) =>{
  //   //     this.resposeData = result;
  //   //
  //   //     this.common.closeLoading();
  //   //     if(this.resposeData.status==true){
  //   //       console.log(this.resposeData);
  //   //       this.presentToast("Password Reset link send to Email");
  //   //       localStorage.setItem('userData', JSON.stringify(this.resposeData) )
  //   //       this.navCtrl.push(Login);
  //   //     }
  //   //     else{
  //   //       this.presentToast("Please give valid Email");
  //   //     }
  //   //
  //   //
  //   //
  //   //   }, (err) => {
  //   //     //Connection failed message
  //   //   });
  //   // }
  //   // else{
  //   //   this.presentToast("Give username and password");
  //   // }
  //
  // }
  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 2000,
      cssClass :'yourClass'
    });
    toast.present();
  }
}

