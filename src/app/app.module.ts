import { FriendModule } from './friend/friend.module';
import { AppRoutingModule } from './app-routing.module';
import { PersonnelManagerModule } from './personnel-manager/personnel-manager.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarModule } from './navbar/navbar.module';
import { ProjectCenterModule } from './project-center/project-center.module';
import { NotFoundComponent } from './navbar/not-found.component';
import { ProjectCenterComponent } from './project-center/project-center.component';
import { PersonnelManagerComponent } from './personnel-manager/personnel-manager.component';
import { FriendComponent } from './friend/friend.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    // RouterModule.forRoot([
    //   {
    //     path: 'projects',
    //     component: ProjectCenterComponent
    //   },
    //   {
    //     path: 'personnel',
    //     component: PersonnelManagerComponent
    //   },
    //   {
    //     path: '',
    //     redirectTo: '/personnel',
    //     pathMatch: 'full'
    //   },
    //   {
    //     path:'**',
    //     component: NotFoundComponent
    //   }
    // ]),
    FormsModule,
    HttpModule,
    NavbarModule,
    ProjectCenterModule,
    PersonnelManagerModule,
    FriendModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
