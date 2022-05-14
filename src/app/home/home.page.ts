import { Component } from '@angular/core';
import { LocalNotificationService } from "../services/local-notification.service";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public title:any;
  public body:any;
  public i:number;
  constructor ( private localNotification : LocalNotificationService ) {}

  async sendLocalNotification () {

    console.log(this.i);
    await this.localNotification.showLocalNotification ( this.i,this.title, this.body  ).then(r=>{
      console.log('Notification Sent', r);
    });
  }

}
