import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ListPrice, name, User } from './variable.service';

@Injectable({
  providedIn: 'root'
})
export class FunctionService {
  name: User[] = [];
  alllist: ListPrice[] = [];
  constructor() {}
  getname(): Observable<User[]> {
    return of(name);
    // return throwError(() => ({ status: 404, message: 'Not found' }));
  }
  getlist(): Observable<ListPrice[]> {
    return of(this.alllist);
    // return throwError(() => ({ status: 404, message: 'Not found' }));
  }
}
