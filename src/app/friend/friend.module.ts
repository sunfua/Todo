import { FriendService } from './friend.service';
import { FriendComponent } from './friend.component';
import { RouterModule } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'friends',
        component: FriendComponent
      }
    ])
  ],
  declarations: [FriendComponent],
  providers: [FriendService],
  exports: [FriendComponent]
})
export class FriendModule { }
