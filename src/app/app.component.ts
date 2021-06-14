import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title: 'AngularProject';
  sidebarToggled = false;

  toggleSidebar() {
    if (this.sidebarToggled) {
      this.sidebarToggled = false;
      console.log(this.sidebarToggled);
    } else {
      this.sidebarToggled = true;
      console.log(this.sidebarToggled);
    }
  }

  ngOnInit() {
  }

}
