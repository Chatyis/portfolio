import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skill-container',
  standalone: true,
  imports: [],
  templateUrl: './skill-container.component.html'
})
export class SkillContainerComponent {
  @Input() imageName: string;
  get fullImagePath() {return `assets/images/${this.imageName}.png`;}
}
