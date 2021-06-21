import { Component } from '@angular/core';

@Component({
  selector: 'courses',
  template: '<h2>{{ getTitle() }}</h2>', // This syntax is called string interpolation
})
export class CoursesComponent {
  title = 'List of courses';

  getTitle() {
    return this.title;
  }
}
