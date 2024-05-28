import {
  Component,
  Input
} from '@angular/core';

@Component({
  selector: 'app-contact-line',
  templateUrl: './contact-line.component.html',
})
export class ContactLineComponent {
  @Input() imageUrl?: string;
  @Input() contactKey?: string;
  @Input() contactValue?: string;
  @Input() contactUrl?: string;
}
