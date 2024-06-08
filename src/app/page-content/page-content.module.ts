import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageContentComponent } from './page-content.component';
import { ProjectContainerModule } from './project-container/project-container.module';
import { ContactLineModule } from './contact-line/contact-line.module';
import { SkillsSectionComponent } from "./skills-component/skills-section.component";

@NgModule({
  declarations: [
    PageContentComponent
  ],
  imports: [
    CommonModule,
    ProjectContainerModule,
    ContactLineModule,
    SkillsSectionComponent,
  ],
  exports: [
    PageContentComponent
  ]
})
export class PageContentModule { }
