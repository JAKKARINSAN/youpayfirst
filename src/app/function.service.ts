import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { name, User } from './variable.service';

@Injectable({
  providedIn: 'root'
})
export class FunctionService {
  name: User[] = [];
  constructor() {}
  getname(): Observable<User[]> {
    return of(name);
    // return throwError(() => ({ status: 404, message: 'Not found' }));
  }
}
