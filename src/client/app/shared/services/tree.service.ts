import {  Injectable } from '@angular/core';
import 'rxjs/add/operator/share';
import { BaseService } from './base.service';

import { MenuItem } from 'primeng/primeng';

@Injectable()
export class TreeService extends BaseService {
  private files: any[];
  private contextMenuItems: MenuItem[];

  constructor() {
    super();

    this.files = [{
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
      "children": [{
        "label": "Work",
        "data": "Work Folder",
        "expandedIcon": "fa-folder-open",
        "collapsedIcon": "fa-folder",
        "children": [{
          "label": "Expenses.doc",
          "icon": "fa-file-word-o",
          "data": "Expenses Document"
        }, {
          "label": "Resume.doc",
          "icon": "fa-file-word-o",
          "data": "Resume Document"
        }]
      }, {
        "label": "Home",
        "data": "Home Folder",
        "expandedIcon": "fa-folder-open",
        "collapsedIcon": "fa-folder",
        "children": [{
          "label": "Invoices.txt",
          "icon": "fa-file-word-o",
          "data": "Invoices for this month"
        }]
      }]
    }, {
      "contextMenuItems": [{
        label: 'Edit',
        icon: 'fa-edit',
        items: [{
          label: 'Undo',
          icon: 'fa-mail-forward'
        }, {
          label: 'Redo',
          icon: 'fa-mail-reply'
        }]
      }],
      "label": "Pictures",
      "data": "Pictures Folder",
      "expandedIcon": "fa-folder-open",
      "collapsedIcon": "fa-folder",
      "children": [{
        "label": "barcelona.jpg",
        "icon": "fa-file-image-o",
        "data": "Barcelona Photo"
      }, {
        "label": "logo.jpg",
        "icon": "fa-file-image-o",
        "data": "PrimeFaces Logo"
      }, {
        "label": "primeui.png",
        "icon": "fa-file-image-o",
        "data": "PrimeUI Logo"
      }]
    }, {
      "label": "Movies",
      "data": "Movies Folder",
      "expandedIcon": "fa-folder-open",
      "collapsedIcon": "fa-folder",
      "children": [{
        "label": "Al Pacino",
        "data": "Pacino Movies",
        "children": [{
          "label": "Scarface",
          "icon": "fa-file-video-o",
          "data": "Scarface Movie"
        }, {
          "label": "Serpico",
          "icon": "fa-file-video-o",
          "data": "Serpico Movie"
        }]
      }, {
        "label": "Robert De Niro",
        "data": "De Niro Movies",
        "children": [{
          "label": "Goodfellas",
          "icon": "fa-file-video-o",
          "data": "Goodfellas Movie"
        }, {
          "label": "Untouchables",
          "icon": "fa-file-video-o",
          "data": "Untouchables Movie"
        }]
      }]
    }];

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

  public getLazyFiles(): Promise<any> {
    return new Promise((resolve, reject) => {
      resolve(this.files);
    });
  }

  public getContextMenuItems(): Promise<any> {
    return new Promise((resolve, reject) => {
      resolve(this.contextMenuItems);
    });
  }
}