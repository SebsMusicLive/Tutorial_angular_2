import { Component, importProvidersFrom, NgModule } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'routing';
}
