import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skill-progressbar',
  templateUrl: './skill-progressbar.component.html',
  styleUrls: ['./skill-progressbar.component.scss']
})
export class SkillProgressbarComponent {
  @Input() skillName?: string;
  @Input() filledPercentage?: number;
}
