import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-frame',
  imports: [],
  templateUrl: './frame.component.html'
})
export class FrameComponent {
  @Input() imageName = '';
}
