import { Component, OnInit } from '@angular/core';
import { REACTIVE_FORM_DIRECTIVES } from '@angular/forms';

import { DynamicTabsComponent } from '../+dynamic_tabs/dynamic_tabs.component';

@Component({
  moduleId: module.id,
  selector: 'sd-dynamic_tabs_show',
  templateUrl: 'dynamic_tabs_show.component.html',
  styleUrls: ['dynamic_tabs_show.component.css'],
  directives: [REACTIVE_FORM_DIRECTIVES, DynamicTabsComponent]
})
export class DynamicTabsShowComponent {
  constructor() { }
}
