import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ExpanderService } from '../expander.service';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.css']
})
export class FeaturedComponent implements OnInit, OnDestroy {
  dealCollapse:Boolean = false;
  expanderServiceSub: Subscription = new Subscription

  constructor(
    private expanderService: ExpanderService
    ) { }

  ngOnInit() {
    this.expanderServiceSub = this.expanderService.dealCollapsed
      .subscribe(
        (dealCollapse: boolean) => {
          this.dealCollapse = dealCollapse;
        }
      );
  }

  onCollapse() {
    this.expanderService.collapseDeal();
  }

  ngOnDestroy() {
    this.expanderServiceSub.unsubscribe();
  }

}
