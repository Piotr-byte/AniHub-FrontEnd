import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-routing-test',
  standalone: true,
  imports: [   RouterOutlet,],
  templateUrl: './routing-test.component.html',
  styleUrl: './routing-test.component.scss'
})
export class RoutingTestComponent {

}
