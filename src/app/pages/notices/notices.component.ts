import { Component } from '@angular/core';
import { NewsViewComponent } from './components/news-view/news-view.component';


@Component({
  selector: 'app-notices',
  standalone: true,
  imports: [NewsViewComponent],
  templateUrl: './notices.component.html',
  styleUrl: './notices.component.css'
})
export class NoticesComponent {



}
