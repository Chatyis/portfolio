import {
  Component,
  Input
} from '@angular/core';

@Component({
  selector: 'app-project-container',
  templateUrl: './project-container.component.html',
  styleUrls: ['./project-container.component.scss'],
})
export class ProjectContainerComponent {
  @Input() imageUrl?: string;
  @Input() siteUrl?: string;
  @Input() title?: string;
  @Input() content?: string;
  @Input() stack?: string;
  @Input() isAlignedRight?: boolean;
  @Input() isButtonVisible = true;
}
