import { Injectable } from '@angular/core';
import 'rxjs/add/operator/share';
import { BaseService } from './base.service';

@Injectable()
export class DynamicTabsService extends BaseService {
  private tabs: any[];

  constructor() {
    super();

    this.tabs = [{
      id: 1,
      label: 'Tab 1',
      icon: 'xx'
    }, {
      id: 2,
      label: 'Tab 2'
    }];
  }

  public getTabs(): Promise<any> {
    return new Promise((resolve, reject) => {
      resolve(this.tabs);
    });
  }
}