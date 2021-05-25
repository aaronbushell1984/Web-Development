import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ExpanderService } from '../expander.service';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.css']
})
export class FeaturedComponent implements OnInit {
  dealCollapse:Boolean = false;

  constructor(
    private expanderService: ExpanderService
    ) { }

  ngOnInit() {
    this.expanderService.dealCollapsed
      .subscribe(
        (dealCollapse: boolean) => {
          this.dealCollapse = dealCollapse
        }
      );
  }

  onCollapse() {
    this.expanderService.collapseDeal()
  }

}
