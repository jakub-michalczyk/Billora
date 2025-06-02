import { Component } from '@angular/core';
import { TopBarComponent } from '../core/components/top-bar/top-bar.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [TopBarComponent, RouterOutlet],
  templateUrl: './app.component.html'
})
export class AppComponent {}
