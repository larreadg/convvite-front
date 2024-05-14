import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  private _sidebarOpen = new Subject<boolean>();
  sidebarOpen$ = this._sidebarOpen.asObservable();

  openSidebar() {
    this._sidebarOpen.next(true);
  }

  closeSidebar() {
    this._sidebarOpen.next(false);
  }
}
