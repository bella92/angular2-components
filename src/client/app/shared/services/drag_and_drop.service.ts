import {  Injectable } from '@angular/core';
import 'rxjs/add/operator/share';
import { BaseService } from './base.service';

@Injectable()
export class DragAndDropService extends BaseService {
  private cars: any[];

  constructor() {
    super();

    this.cars = [{
      id: 1,
      name: 1
    }, {
      id: 2,
      name: 2
    }];
  }

  public getCarsSmall(): Promise<any> {
    return new Promise((resolve, reject) => {
      resolve(this.cars);
    });
  }
}