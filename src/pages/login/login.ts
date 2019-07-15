

import {Component} from "@angular/core";
import {IonicPage, NavController, AlertController, ToastController, MenuController, NavParams} from "ionic-angular";

import {Common} from "../../providers/common";
import {AuthService} from "../../providers/auth-service";
import {HomePage} from "../home/home";
import {ForgetPage} from "../forget/forget";
import { MyApp } from '../../app/app.component';
import {Observable} from 'rxjs/Rx';
import * as JWT from 'jwt-decode';

@Component({
    selector: 'page-login',
    templateUrl: 'login.html'
})
export class LoginPage {
    userData = {"email":"", "password":"" };
    resposeData : any;

    constructor(
                public authService: AuthService,
                private toastCtrl:ToastController,
                public common: Common,
                public navCtrl: NavController,
                public forgotCtrl: AlertController,
                public menu: MenuController,
                public navParams: NavParams) {
        this.menu.swipeEnable(false);
    }

    // go to register page
    // register() {
    //   this.nav.setRoot(RegisterPage);
    // }
    ionViewWillEnter() {

             console.log(this.navParams.get('message'));
            var message = this.navParams.get('message');
            if (message == "refresh") {
                console.log("Remove Page2");
                 // this.navCtrl.remove(this.navCtrl.getPrevious().index);
                location.reload();
            }

    }
    // login and go to home page
    login() {
        if(this.userData.email && this.userData.password){

            // this.common.presentLoading();
            var credentials = { email: this.userData.email, password: this.userData.password };
            this.authService.loginpostData(credentials, "v2/auth/signIn").then((result) =>{
                this.resposeData = result;

                if(this.resposeData.token != "Access Denied"){

                    let t = JWT(this.resposeData.token);
                    t['token']=this.resposeData.token;
                    console.log(t);
                    this.authService.saveData(t);

                    // this.authService.scheduleRefresh(t);
                    this.presentToast("login success");
                    // localStorage.setItem('userData', JSON.stringify(this.resposeData) )
                    // this.common.closeLoading();
                    this.navCtrl.setRoot(MyApp);
                }
                else{
                    this.presentToast("Please give valid username and password");
                    // this.common.closeLoading();
                }



            }, (err) => {
                const myObjStr = JSON.stringify(err);
                //Connection failed message
                this.presentToast(err);
                // this.common.closeLoading();
            });
                      }
        else{
            this.presentToast("Give username and password");
        }

    }





    forget() {
        //this.common.presentLoading();
        // this.common.closeLoading();
        this.navCtrl.setRoot(ForgetPage);
    }

    forgotPass() {
        let forgot = this.forgotCtrl.create({
            title: 'Forgot Password?',
            message: "Enter you email address to send a reset link password.",
            inputs: [
                {
                    name: 'email',
                    placeholder: 'Email',
                    type: 'email'
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: data => {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Send',
                    handler: data => {
                        console.log('Send clicked');
                        let toast = this.toastCtrl.create({
                            message: 'Email was sended successfully',
                            duration: 3000,
                            position: 'top',
                            cssClass: 'dark-trans',
                            closeButtonText: 'OK',
                            showCloseButton: true
                        });
                        toast.present();
                    }
                }
            ]
        });
        forgot.present();
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
