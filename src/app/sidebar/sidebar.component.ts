import {Component, OnInit} from '@angular/core';
import {SidebarRoutesService} from '../shared/sidebar-routes.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  routes = [];

  constructor(private sidebarRoutesService: SidebarRoutesService) {
  }

  ngOnInit(): void {
    this.getRoutes();
  }

  getRoutes() {
    this.routes = this.sidebarRoutesService.getRoutes();
  }
}
