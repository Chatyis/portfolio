import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-page-content',
  templateUrl: './page-content.component.html',
  styleUrls: ['./page-content.component.scss']
})
export class PageContentComponent implements OnInit {
  @Output() activeSectionChange = new EventEmitter<string>();

  ngOnInit() {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
      console.log(entries);
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.activeSectionChange.next(entry.target.id);
        }
      });
    }, options);

    document.querySelectorAll('section').forEach(section => {
      console.log(section);
      observer.observe(section);
    });
  }
}
