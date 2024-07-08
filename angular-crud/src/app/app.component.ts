import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CreateComponent } from './create/create.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CreateComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'angularCrud';
}
