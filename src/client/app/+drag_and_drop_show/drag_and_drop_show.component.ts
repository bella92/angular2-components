import { Component, OnInit } from '@angular/core';
import { REACTIVE_FORM_DIRECTIVES } from '@angular/forms';

import { DragAndDropComponent } from '../+drag_and_drop/drag_and_drop.component';

@Component({
  moduleId: module.id,
  selector: 'sd-drag_and_drop_show',
  templateUrl: 'drag_and_drop_show.component.html',
  styleUrls: ['drag_and_drop_show.component.css'],
  directives: [REACTIVE_FORM_DIRECTIVES, DragAndDropComponent]
})
export class DragAndDropShowComponent implements OnInit {
  width: number;
  height: number;

  constructor() { }

  ngOnInit() {
    this.width = 3;
    this.height = 3;
  }
}
