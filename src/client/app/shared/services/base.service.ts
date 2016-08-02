import { Headers } from '@angular/http';

export class BaseService {
  private _baseUrl: string = 'http://localhost:56588/api/';

  get baseUrl(): string {
    return this._baseUrl;
  }

  getHeaders(method: string): Headers {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Method', method);

    return headers;
  }
}