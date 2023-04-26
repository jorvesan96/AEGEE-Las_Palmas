import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AEGEE-Las_Palmas';

  isLoading: boolean = true;

  ngOnInit(){
    this.isLoading = false;
  }
}
