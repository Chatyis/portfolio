import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SkillProgressbarComponent } from './skill-progressbar.component';

@NgModule({
  declarations: [
    SkillProgressbarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SkillProgressbarComponent
  ]
})
export class SkillProgressbarModule { }
