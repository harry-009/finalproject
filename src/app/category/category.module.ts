import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { AddcategoryComponent } from './addcategory/addcategory.component';
import { DeletecategoryComponent } from './deletecategory/deletecategory.component';
import { EditcategoryComponent } from './editcategory/editcategory.component';


@NgModule({
  declarations: [AddcategoryComponent, DeletecategoryComponent, EditcategoryComponent],
  imports: [
    CommonModule,
    CategoryRoutingModule
  ]
})
export class CategoryModule { }
