import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  template: `
            <h2>{{title}}</h2>
            `
})
export class AppComponent {
  title = 'TastyTracker';
}
