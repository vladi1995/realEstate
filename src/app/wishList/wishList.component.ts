import { Component } from '@angular/core';
import { WishList } from './wishList.model';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wishList.component.html',
  styleUrls: ['./wishList.component.css']
})
export class WishListComponent {
  wishList: WishList[] = [
    new WishList("Ivan", "123456", "2 room beautiful apartment", 
    "https://fpg.roomsketcher.com/image/topic/28/image/2-Bedroom-Apartment-Plan-3D.jpg", 45000),

    new WishList("Ivan", "123456", "3 room beautiful apartment", 
    "https://medialibrarycf.entrata.com/2603/MLv3/4/23/2022/08/30/031303/630e7d5f8aaab2.86377676578.jpg", 65000),
  ];
}
