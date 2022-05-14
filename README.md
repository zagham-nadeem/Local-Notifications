
# Local Notifications
Ionic v6 Angular Capacitor v3 Local Notifications
The Local Notifications API provides a way to schedule device notifications locally (i.e. without a server sending push notifications).


## Installation
Step 1 : Create a new project using following command
```bash
ionic start ionNotifications blank --type=angular --capacitor --package-id=com.learn2earn.localnotifications
```
Step 2 : Install the dependencies using following commands

```bash
npm install @capacitor/local-notifications
npx cap sync
```
Step 3 : Create a common service to show a local notification
```bash
npm ionic g service local-notification
```
Step 4 : Open the local-notification.service.ts and write the following code
```bash
import { Injectable } from '@angular/core';
import { LocalNotifications } from '@capacitor/local-notifications';
@Injectable({
  providedIn: 'root'
})
export class LocalNotificationService {

  constructor() { }
  async showLocalNotification(id : number, title : string, text : string){

    await LocalNotifications.schedule({
      notifications: [
        {
          title: title,
          body: text,
          id: id
        }
      ]
    });
  }
}
// by Zagham Nadeem (Senior Developer at Learn2Earn)
```
Step 5 : Open the capacitor.config.ts and paste this code
```bash
import { CapacitorConfig } from '@capacitor/cli';
const config: CapacitorConfig = {
  appId: 'com.learn2earn.notify',
  appName: 'localNotifications',
  webDir: 'www',
  bundledWebRuntime: false,
  plugins: {
    LocalNotifications: {
      smallIcon: "ic_stat_icon_config_sample",
      iconColor: "#488AFF",
      sound: "beep.wav",
    },
  },
};

export default config;
// by Zagham Nadeem (Senior Developer at Learn2Earn)
```
Step 6 : Add the following Code in home.page.ts
```bash
<ion-header [translucent]="true">
  <ion-toolbar>
    <ion-title>
      Local Notifications
    </ion-title>
  </ion-toolbar>
</ion-header>

<ion-content [fullscreen]="true">
  <ion-input [(ngModel)]="title" placeholder="Enter Title"></ion-input>
  <ion-input [(ngModel)]="body" placeholder="Enter Body"></ion-input>
  <ion-button expand="block" (click)="sendLocalNotification()">
    Send Local notification
  </ion-button>
</ion-content>
```
Step 7 : Open the home.page.ts and paste the following code
```bash
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
  constructor ( private localNotification : LocalNotificationService ) {}

  async sendLocalNotification () {
    await this.localNotification.showLocalNotification ( 1,this.title, this.body  ).then(r=>{
      console.log('Notification Sent', r);
    });
  }

}
// by Zagham Nadeem (Senior Developer at Learn2Earn)
```
Step 8 : Make a build by this command
```bash
1- ionic build
2- npx cap sync
3- npx cap open android
```


## 🚀 About Me
Hey, i am
    
    Zagham Nadeem (CEO of MyLife)

I am professional Ionic & Angular developer and working on Ionic modules since 2019. My motive is to help the newbies learn and solve their programming solutions. I have done my BSCS Degree from GCUF. Now i am a part of Learn2Earn Professional Institute of Computer Sciences as a senior developer.

