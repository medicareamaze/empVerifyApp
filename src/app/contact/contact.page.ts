import { Component } from '@angular/core';

declare var cordova: any
@Component({
  selector: 'app-contact',
  templateUrl: 'contact.page.html',
  styleUrls: ['contact.page.scss']
})
export class ContactPage {
  constructor() {
    
    cordova.plugins.scan.scanDoc(1, this.scanManager.onSuccess, this.scanManager.onFail);
  }
  scanManager = {
    onSuccess: function(){
      alert('success');
    },
    onFail: function(){
      alert('failure');
    }
  }
}
