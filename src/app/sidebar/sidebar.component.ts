import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {SidebarRoutesService} from '../shared/sidebar-routes.service';
import {MatSidenav} from '@angular/material/sidenav';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  routes = [];
  @ViewChild('mySidenav') private sidenavId: MatSidenav;
  @Input() sidebarToggled;

  constructor(private sidebarRoutesService: SidebarRoutesService) {
  }

  ngOnInit(): void {
    this.getRoutes();
  }

  getRoutes() {
    this.routes = this.sidebarRoutesService.getRoutes();
  }

  toggleSidebar() {
    this.sidenavId.toggle();
  }
}
