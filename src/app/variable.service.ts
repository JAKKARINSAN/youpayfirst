import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VariableService {

  constructor() { }
}
export interface User {
  Name: string,
}

export interface ListPrice {
  Name: string,
  List: string,
  Price: number,
}

export const name: User[] = [];
export const alllist: ListPrice[] = [];
