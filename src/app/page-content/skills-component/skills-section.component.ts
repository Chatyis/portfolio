import { Component } from '@angular/core';
import { SkillContainerComponent } from "./skill-container/skill-container.component";

@Component({
  selector: 'app-skills-section',
  standalone: true,
  imports: [
    SkillContainerComponent
  ],
  templateUrl: './skills-section.component.html'
})
export class SkillsSectionComponent {

}
