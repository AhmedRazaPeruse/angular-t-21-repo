import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'twitterapp';
  _data = "Ahmed Raza Mustafa"
  _vita = {
    name:"Ali",
    age:"25",
    title:"Khan"
  }
}
