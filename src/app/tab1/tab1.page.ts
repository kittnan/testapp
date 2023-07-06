import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponent],
  providers: [BarcodeScanner]
})
export class Tab1Page {
  constructor(
    private barcodeScanner: BarcodeScanner
  ) { }

  ngOnInit(): void {

  }
  openCamera() {
    this.barcodeScanner.scan().then((barcodeData: any) => {
      console.log('Barcode data', barcodeData);
    }).catch((err: any) => {
      console.log('Error', err);
    });
  }
}
