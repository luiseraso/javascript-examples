import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fundamentos-angular';

  name = 'Pedro';
  age = 810;
  img = 'https://www.w3schools.com/howto/img_avatar.png'

  btnDisable = true;
  inputText = "Default input text";
}
