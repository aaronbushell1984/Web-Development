import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExpanderService {
  dealCollapsed = new EventEmitter<Boolean>();
  dealCollapse = true
  constructor() { }

  expandDeal() {
    this.dealCollapse = false;
    this.dealCollapsed.emit(this.dealCollapse);
  }

  collapseDeal() {
    this.dealCollapse = true
    this.dealCollapsed.emit(this.dealCollapse);
  }
}
