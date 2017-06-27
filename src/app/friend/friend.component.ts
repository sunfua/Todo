import { FriendService } from './friend.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-friend',
  templateUrl: './friend.component.html',
  styleUrls: ['./friend.component.css']
})
export class FriendComponent implements OnInit {
  componentName: string = 'FriendComponent';
  friends: any;
  constructor(friendSerice: FriendService) {
    this.friends=friendSerice.getFriends();
   }

  ngOnInit() {
  }

}
