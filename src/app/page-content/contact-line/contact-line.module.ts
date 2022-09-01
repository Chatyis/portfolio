import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactLineComponent } from './contact-line.component';

@NgModule({
  declarations: [
    ContactLineComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ContactLineComponent
  ]
})
export class ContactLineModule { }
