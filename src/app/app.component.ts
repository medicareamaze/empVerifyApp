import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

declare var cordova: any

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      //var permissions = cordova.plugins.permissions;
      //permissions.requestPermission(permissions.CAMERA, this.success, this.error);
    });
  }
  error() {
    console.warn('Camera permission is not turned on');
  }
   
  success( status ) {
    if( !status.hasPermission ) console.log('something went wrong');
  }
}
