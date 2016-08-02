import { Component, OnInit, OnChanges, Input } from '@angular/core';

import { REACTIVE_FORM_DIRECTIVES } from '@angular/forms';

import { Draggable, Droppable } from 'primeng/primeng';
import { Panel } from 'primeng/primeng';

import { DragAndDropService } from '../shared/services/drag_and_drop.service';

@Component({
  moduleId: module.id,
  selector: 'sd-drag_and_drop',
  templateUrl: 'drag_and_drop.component.html',
  styleUrls: ['drag_and_drop.component.css'],
  directives: [REACTIVE_FORM_DIRECTIVES, Draggable, Droppable, Panel],
  providers: [DragAndDropService]
})
export class DragAndDropComponent implements OnInit, OnChanges {
  @Input() width: number;
  @Input() height: number;

  availableElements: any[];
  rows: any[];

  draggedElement: any;

  constructor(private dragAndDropService: DragAndDropService) { }

  setCells() {
    this.rows = (new Array(this.height)).fill([]);
    this.rows = this.rows.map(_ => {
      let row = (new Array(this.width)).fill([]);

      row = row.map(_ => {
        let cell = {};
        return cell;
      });

      return row;
    });
  }

  ngOnInit() {
    // this.width = 2;
    // this.height = 2;

    this.setCells();

    this.dragAndDropService.getCarsSmall().then(cars => this.availableElements = cars);
  }

  ngOnChanges() {
    this.setCells();
  }

  dragStart(event, element: any) {
    this.draggedElement = element;
  }

  drop(event, cell) {
    if(this.draggedElement) {
      cell.element = this.draggedElement;
      this.draggedElement = null;
    }
  }

  dragEnd(event) {
    this.draggedElement = null;
  }
}
