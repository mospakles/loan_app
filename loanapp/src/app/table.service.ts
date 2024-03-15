import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Table } from './table/table.component';

@Injectable({
  providedIn: 'root',
})
export class TableService {
  constructor(private httpClient: HttpClient) {}

  public getTable(): Observable<Table[]> {
    const url =
      'http://testapi.creditwallet.ng/api/v2/loan/list/active/interview';
    return this.httpClient.post<Table[]>(url, {});
  }
}
