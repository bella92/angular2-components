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
      header: 'Tab 1'
    }, {
      id: 2,
      header: 'Tab 2'
    }];
  }

  public getTabs(): Promise<any> {
    return new Promise((resolve, reject) => {
      resolve(this.tabs);
    });
  }
}