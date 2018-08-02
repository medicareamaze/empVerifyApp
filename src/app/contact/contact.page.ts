import { Component,NgZone} from '@angular/core';

declare var window: any
@Component({
  selector: 'app-contact',
  templateUrl: 'contact.page.html',
  styleUrls: ['contact.page.scss']
})
export class ContactPage {
  data = {imageURI:""};
  constructor(private zone : NgZone) {
    
   
  }

  onSuccess= (imageURI:any)=>{
      imageURI = imageURI + "?random=" + Math.random();
     
      this.zone.run(()=>  this.data.imageURI  = window.Ionic.WebView.convertFileSrc(imageURI));
  }
 onFail(){
      alert('failure');
    }
  scan = () =>{
    window.scan.scanDoc(1, this.onSuccess, this.onFail);
  }
}
