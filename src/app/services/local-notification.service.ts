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
