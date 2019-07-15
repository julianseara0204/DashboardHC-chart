import {Component, Injectable, ViewChild} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import {App, Events } from "ionic-angular";
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/timeout';
import {HTTP} from '@ionic-native/http';
import {Observable} from "rxjs";
import * as JWT from "jwt-decode";
import {Nav} from "ionic-angular";
import {LoginPage} from "../pages/login/login";
 let apiUrl = 'https://dhc-app-api-prod.azurewebsites.net/';
/*
  Generated class for the AuthService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
@Component({
    template: `<ion-nav [root]="rootPage"></ion-nav>`
})
export class AuthService {
    @ViewChild(Nav) nav: Nav;
    localdata: any;
    idToken: string;

    refreshSubscription: any;
    constructor(public http: Http, private storage: Storage,public app: App,public events: Events) {
        console.log('Hello AuthService Provider');



    }
    getProducts(){
        return this.storage.get('id_token').then((value)=>{
            this.localdata= value;
            return this.localdata
        });
    }

    postData(credentials, type) {

        return new Promise((resolve, reject) => {
            var headers = new Headers();
            headers.append('Access-Control-Allow-Origin', '*');
            headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
            headers.append('Accept', 'application/json');
            this.storage.get('id_token').then((value) => {
                this.localdata = value;



            //console.log(this.localdata)
            headers.append('Authorization', 'Bearer  ' + this.localdata);


            let options = new RequestOptions({headers: headers});
            //  console.log(credentials)
            this.http.post(apiUrl + type, credentials, options).timeout(15000).subscribe
            (res => {
                // this.idToken = res.json().token;
                resolve(res.json());
            }, (err) => {
                reject(err);
                console.log(err);
            });
        });
        });

    }

    loginpostData(credentials, type) {

        return new Promise((resolve, reject) => {
            var headers = new Headers();
            headers.append('Access-Control-Allow-Origin', '*');
            headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
            headers.append('Accept', 'application/json');

            let options = new RequestOptions({headers: headers});
         //   console.log(credentials)
            this.http.post(apiUrl+type, credentials, options).timeout(15000).subscribe
            (res => {
                this.idToken = res.json().token;
                // console.log(this.idToken)
                resolve(res.json());
            }, (err) => {
                reject(err);
                console.log(err);
            });

        });

    }
    getData(type) {

        return new Promise((resolve, reject) => {
            var headers = new Headers();
            headers.append('Access-Control-Allow-Origin', '*');
            headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
            headers.append('Accept', 'application/json');
            this.storage.get('id_token').then((value) => {
                this.localdata = value;
                headers.append('Authorization', 'Bearer ' + this.localdata);


            let options = new RequestOptions({headers: headers});


            this.http.get(apiUrl+type, options).timeout(15000).subscribe
            (res => {
                resolve(res.json());
            }, (err) => {
                reject(err);
                console.log(err);
            });
            });
        });

    }

    saveData(data: any) {

        let rs = data;
      // rs['exp'] = '12';
      // console.log(rs)
        // storage.set('name', 'Max');
        this.storage.set("user", rs);
        this.storage.set("id_token", rs.token);
    }

    public scheduleRefresh(e) {
        console.log('et a new JWT from Auth0');
        // If the user is authenticated, use the token stream
        // provided by angular2-jwt and flatMap the token

        let source = Observable.of(this.idToken).flatMap(
            token => {
                // The delay to generate in this case is the difference
                // between the expiry time and the issued at time
                let jwtIat = e.iat;
             //   console.log(e.iat);
                let jwtExp = e.exp;
                let iat = new Date(0);
                let exp = new Date(0);

                let delay = (exp.setUTCSeconds(jwtExp) - iat.setUTCSeconds(jwtIat));
                console.log("will start refresh after :",(delay/1000)/60);
                if(delay-1000<=0 || delay-1000== null )
                    delay = 1;
                return Observable.interval(delay);
            });

        this.refreshSubscription = source.subscribe(() => {
            this.getNewJwt();
        });
    }


    public getNewJwt() {

        // Get a new JWT from Auth0 using the refresh token saved
        // in local storage
        this.storage.get("id_token").then((thetoken)=>{

            let  senddata: { Token:string} = {
                Token : thetoken
            };
            this.storage.remove('user');
            this.storage.remove('id_token');
            this.events.publish('page_refresh','');
            // this.authService.postData(credentials, "v2/auth/signIn").then((result) =>{
            //         console.log(JSON.stringify(res));
            //         console.log(res.status);
            //         // If the API returned a successful response, mark the user as logged in
            //         // this need to be fixed on Laravel project to retun the New Token ;
            //         if(res.status == 'success') {
            //             this.storage.set("id_token", res.token);
            //
            //         } else {
            //             console.log("The Token Black Listed");
            //             this.logout();
            //
            //         }
            //     }, err => {
            //         console.error('ERROR', err);
            //     });

        });

    }

    public startupTokenRefresh() {
        // If the user is authenticated, use the token stream
        // provided by angular2-jwt and flatMap the token

        this.storage.get("id_token").then((thetoken)=>{

            if(thetoken){

                let source = Observable.of(thetoken).flatMap(
                    token => {
                        // Get the expiry time to generate
                        // a delay in milliseconds
                        var a :any;
                        a =JWT(token);
                        let now: number = new Date().valueOf();
                        let jwtExp: number = a.exp;
                        let exp: Date = new Date(0);
                        exp.setUTCSeconds(jwtExp);
                        let delay: number = exp.valueOf() - now;

                        if(delay <= 0) {
                            delay=1;
                        }
                        // Use the delay in a timer to
                        // run the refresh at the proper time
                        return Observable.timer(delay);
                    });

                // Once the delay time from above is
                // reached, get a new JWT and schedule
                // additional refreshes
                source.subscribe(() => {
                    this.getNewJwt();
                    this.scheduleRefresh(thetoken);
                });

            }else{
                //there is no user logined
                console.info("there is no user logined ");

            }

        });


    }
    logout() {
        // stop function of auto refesh
        // this.unscheduleRefresh();
        this.storage.remove('user');
        this.storage.remove('id_token');

    }
    public unscheduleRefresh() {
// Unsubscribe fromt the refresh
        if (this.refreshSubscription) {
            this.refreshSubscription.unsubscribe();
        }
    }

}
