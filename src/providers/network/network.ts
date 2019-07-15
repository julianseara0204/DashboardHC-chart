
import {Injectable} from "@angular/core";
import {Network} from "@ionic-native/network";
import {ToastController} from "ionic-angular";
import {Subscription} from "rxjs";

@Injectable()
export class NetworkService {
  previousStatus:any
  private disconnectSubscription:Subscription;
  private connectionSubscription:Subscription;

  constructor(private network:Network,
              private toastController:ToastController) {

  }

  getConnectionType() {
    return this.network.type;
  }
  getConnection() {
    return this.network.onConnect();
  }

  subscribe() {

    this.disconnectSubscription = this.network.onDisconnect().subscribe(() => {
      this.showToast('Disconnection Detected.');
      this.previousStatus = 1;
    });

    this.connectionSubscription = this.network.onConnect().subscribe(() => {
      this.showToast('Connection Detected.');
    })
  }

  unsubscribe() {
    this.connectionSubscription.unsubscribe();
    this.disconnectSubscription.unsubscribe();
  }

  showToast(message) {
    const toast = this.toastController.create({
      message:message,
      duration:3000,
      position: 'bottom'
    });

    toast.present();
  }
}
