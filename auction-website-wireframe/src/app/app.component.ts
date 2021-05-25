import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ExpanderService } from './expander.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'auction-website-wireframe';
  // expanderSubscription: Subscription;
  dealCollapse = true;
  dealCollapseSub: Subscription = new Subscription;

  constructor(
    private expanderService: ExpanderService
  ) {}


  ngOnInit() {
    this.dealCollapseSub = this.expanderService.dealCollapsed
      .subscribe(
        (dealCollapse: boolean) => {
          this.dealCollapse = dealCollapse
        }
      );
  }

  dealExpand() {
    this.expanderService.expandDeal();
  }

  ngOnDestroy() {
    this.dealCollapseSub.unsubscribe();
  }

}

