import { Component, OnInit } from '@angular/core';
import { REACTIVE_FORM_DIRECTIVES } from '@angular/forms';

import { Tree } from 'primeng/primeng';
import { TreeNode } from 'primeng/primeng';
import { Message } from 'primeng/primeng';
import { Growl } from 'primeng/primeng';
import { ContextMenu, TieredMenu, MenuItem } from 'primeng/primeng';

import { TreeService } from '../shared/services/tree.service';
import { DragAndDropComponent } from '../+drag_and_drop/drag_and_drop.component';

@Component({
  moduleId: module.id,
  selector: 'sd-tree',
  templateUrl: 'tree.component.html',
  styleUrls: ['tree.component.css'],
  directives: [REACTIVE_FORM_DIRECTIVES, Tree, Growl, ContextMenu, TieredMenu, DragAndDropComponent],
  providers: [TreeService]
})
export class TreeComponent implements OnInit {
  width: number;
  height: number;

  msgs: Message[];

  files: TreeNode[];

  lazyFiles: TreeNode[];

  selectedFile: TreeNode;

  selectedFiles: TreeNode[];

  contextMenuItems: MenuItem[];

  selectedNode: TreeNode;

  constructor(private treeService: TreeService) { }

  ngOnInit() {
    this.width = 3;
    this.height = 3;

    this.treeService.getFiles().then(files => this.files = files);
    this.treeService.getLazyFiles().then(files => this.lazyFiles = files);

    //this.homeService.getContextMenuItems().then(items => this.contextMenuItems = items);

    this.selectedNode = {};
  }

  nodeSelect(event) {
    this.msgs = [];
    this.msgs.push({severity: 'info', summary: 'Node Selected', detail: event.node.label});

    this.selectedNode = event.node;
  }

  nodeUnselect(event) {
    this.msgs = [];
    this.msgs.push({severity: 'info', summary: 'Node Unselected', detail: event.node.label});
  }

  nodeExpand(event) {
    if(event.node) {
      //in a real application, make a call to a remote url to load children of the current node and add the new nodes as children
      this.treeService.getLazyFiles().then(nodes => event.node.children = nodes);
    }
  }

  nodeContextMenu(node, menu, event) {
    event.preventDefault();

    if (node.contextMenuItems) {
      menu.hide();
      menu.show(event);
      this.contextMenuItems = node.contextMenuItems;
    }
  }

  nodeDoubleClick(node, nodeLabelInput, event) {
    event.preventDefault();

    //nodeLabelInput.focus();
    node.isEdited = true;
  }

  nodeKeyPress(node, event) {
    const keyName = event.key;

    if (keyName === 'Enter') {
      event.preventDefault();
      node.isEdited = false;
    }
  }

  nodeBlur(node, event) {
    event.preventDefault();
    node.isEdited = false;
  }
}
