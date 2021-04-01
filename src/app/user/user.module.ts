import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { AdduserComponent } from './adduser/adduser.component';
import { DeleteuserComponent } from './deleteuser/deleteuser.component';
import { EdituserComponent } from './edituser/edituser.component';
import { ListComponent } from './list/list.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [AdduserComponent, DeleteuserComponent, EdituserComponent, ListComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    HttpClientModule
  ]
})
export class UserModule { }
