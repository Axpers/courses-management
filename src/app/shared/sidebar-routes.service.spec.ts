import { TestBed } from '@angular/core/testing';

import { SidebarRoutesService } from './sidebar-routes.service';

describe('SidebarRoutesService', () => {
  let service: SidebarRoutesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SidebarRoutesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
