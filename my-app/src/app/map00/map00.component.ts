import { Component } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-map00',
  templateUrl: './map00.component.html',
  styleUrls: ['./map00.component.css']
})
export class Map00Component {

  constructor(private globalService: GlobalService){}

  goToMap01() {
    this.globalService.player.positionX = 0;
    this.globalService.player.positionY = 1;
  }

  goToMap10() {
    this.globalService.player.positionX = 1;
    this.globalService.player.positionY = 0;
  }

}
