import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'home',
  standalone: true,
  imports: [CommonModule, AboutComponent, MatIconModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
