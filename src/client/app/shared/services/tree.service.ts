import {  Injectable } from '@angular/core';
import 'rxjs/add/operator/share';
import { BaseService } from './base.service';

import { MenuItem } from 'primeng/primeng';

@Injectable()
export class TreeService extends BaseService {
  private files: any[];
  private lazyFiles: any[];
  private contextMenuItems: MenuItem[];

  setChild(parent: any, levels: number) {
    if(levels <= 1) {
      return;
    }

    for(let i = 0; i < 1; i++) {
      let child = {
        "contextMenuItems": [{
          label: 'File',
          items: [{
            label: 'New',
            icon: 'fa-plus',
            items: [{
              label: 'Project'
            }, {
              label: 'Other'
            }]
          }, {
            label: 'Open'
          }, {
            label: 'Quit'
          }]
        }],
        "label": "Documents",
        "data": "Documents Folder",
        "expandedIcon": "fa-folder-open",
        "collapsedIcon": "fa-folder",
        "children": []
        // "children": [{
        //   "label": "Work",
        //   "data": "Work Folder",
        //   "expandedIcon": "fa-folder-open",
        //   "collapsedIcon": "fa-folder",
        //   "children": [{
        //     "label": "Expenses.doc",
        //     "icon": "fa-file-word-o",
        //     "data": "Expenses Document"
        //   }, {
        //     "label": "Resume.doc",
        //     "icon": "fa-file-word-o",
        //     "data": "Resume Document"
        //   }]
        // }]
      };

      parent.children.push(child);
      this.setChild(child, levels - 1);
    }
  }

  constructor() {
    super();

    this.files = [];
    this.lazyFiles = [];

    let j = 0;

    for(let i = 0; i < 10000; i++) {
      let node = {
        "contextMenuItems": [{
          label: 'File',
          items: [{
            label: 'New',
            icon: 'fa-plus',
            items: [{
              label: 'Project'
            }, {
              label: 'Other'
            }]
          }, {
            label: 'Open'
          }, {
            label: 'Quit'
          }]
        }],
        "index": i,
        "parentIndex": j - 1,
        "label": "Documents",
        "data": "Documents Folder",
        "expandedIcon": "fa-folder-open",
        "collapsedIcon": "fa-folder",
        "children": [],
        "leaf": false
        // "children": [{
        //   "label": "Work",
        //   "data": "Work Folder",
        //   "expandedIcon": "fa-folder-open",
        //   "collapsedIcon": "fa-folder",
        //   "children": [{
        //     "label": "Expenses.doc",
        //     "icon": "fa-file-word-o",
        //     "data": "Expenses Document"
        //   }, {
        //     "label": "Resume.doc",
        //     "icon": "fa-file-word-o",
        //     "data": "Resume Document"
        //   }]
        // }]
      };

      // this.setChild(node, 10);
      //
      // this.files.push(node);
      this.lazyFiles.push(node);

      if(i % 1000 === 0) {
        j++;
      }
    }

    this.contextMenuItems = [
      {
        label: 'File',
        items: [{
          label: 'New',
          icon: 'fa-plus',
          items: [
            {label: 'Project'},
            {label: 'Other'},
          ]
        },
          {label: 'Open'},
          {label: 'Quit'}
        ]
      },
      {
        label: 'Edit',
        icon: 'fa-edit',
        items: [
          {label: 'Undo', icon: 'fa-mail-forward'},
          {label: 'Redo', icon: 'fa-mail-reply'}
        ]
      }
    ];
  }

  public getFiles(): Promise<any> {
    return new Promise((resolve, reject) => {
      resolve(this.files);
    });
  }

  public getLazyFiles(parentIndex: number): Promise<any> {
    return new Promise((resolve, reject) => {
      resolve(this.lazyFiles.filter(f => {
        return f.parentIndex === parentIndex;
      }));
    });
  }

  public getContextMenuItems(): Promise<any> {
    return new Promise((resolve, reject) => {
      resolve(this.contextMenuItems);
    });
  }
}