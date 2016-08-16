import { Component, OnInit } from '@angular/core';
import { REACTIVE_FORM_DIRECTIVES } from '@angular/forms';
import { RouterLink } from '@angular/router';

import { TabMenu } from 'primeng/primeng';

import {TabView} from 'primeng/primeng';
import {TabPanel} from 'primeng/primeng';

import { InnerContent } from '../+inner_content/inner_content';

import { DynamicTabsService } from '../shared/services/dynamic_tabs.service';

@Component({
  moduleId: module.id,
  selector: 'sd-dynamic_tabs',
  templateUrl: 'dynamic_tabs.component.html',
  styleUrls: ['dynamic_tabs.component.css'],
  directives: [REACTIVE_FORM_DIRECTIVES, RouterLink, TabMenu, InnerContent, TabView, TabPanel],
  providers: [DynamicTabsService, RouterLink]
})
export class DynamicTabsComponent implements OnInit {
  tabs: any[];
  pesho: number;

  constructor(private dynamicTabsService: DynamicTabsService) {
    this.pesho = 5;
  }

  ngOnInit() {
    this.dynamicTabsService.getTabs().then(tabs => this.tabs = tabs);
    // this.tabs = [{
    //   label: 'Tab 1',
    //   command: this.command
    // }, {
    //   label: 'Tab 2',
    //   command: this.command
    // }];
  }

  command() {
    debugger;
  }

  add() {
    this.tabs.push({
      id: 1,
      label: 'Tab 1',
      icon: 'xx'
    });
  }

  //
  // nodeSelect(event) {
  //   this.msgs = [];
  //   this.msgs.push({severity: 'info', summary: 'Node Selected', detail: event.node.label});
  //
  //   this.selectedNode = event.node;
  // }
  //
  // nodeUnselect(event) {
  //   this.msgs = [];
  //   this.msgs.push({severity: 'info', summary: 'Node Unselected', detail: event.node.label});
  // }
  //
  // nodeExpand(event) {
  //   if(event.node) {
  //     //in a real application, make a call to a remote url to load children of the current node and add the new nodes as children
  //     this.treeService.getLazyFiles(event.node.index).then(nodes => event.node.children = nodes);
  //   }
  // }
  //
  // nodeContextMenu(node, menu, event) {
  //   event.preventDefault();
  //
  //   if (node.contextMenuItems) {
  //     menu.hide();
  //     menu.show(event);
  //     this.contextMenuItems = node.contextMenuItems;
  //   }
  // }
  //
  // nodeDoubleClick(node, nodeLabelInput, event) {
  //   event.preventDefault();
  //
  //   //nodeLabelInput.focus();
  //   node.isEdited = true;
  // }
  //
  // nodeKeyPress(node, event) {
  //   const keyName = event.key;
  //
  //   if (keyName === 'Enter') {
  //     event.preventDefault();
  //     node.isEdited = false;
  //   }
  // }
  //
  // nodeBlur(node, event) {
  //   event.preventDefault();
  //   node.isEdited = false;
  // }
}
