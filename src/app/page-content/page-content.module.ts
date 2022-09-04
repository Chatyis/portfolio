import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageContentComponent } from './page-content.component';
import { ProjectContainerModule } from './project-container/project-container.module';
import { SkillProgressbarModule } from './skill-progressbar/skill-progressbar.module';
import { ContactLineModule } from './contact-line/contact-line.module';

@NgModule({
  declarations: [
    PageContentComponent
  ],
  imports: [
    CommonModule,
    ProjectContainerModule,
    SkillProgressbarModule,
    ContactLineModule
  ],
  exports: [
    PageContentComponent
  ]
})
export class PageContentModule { }
