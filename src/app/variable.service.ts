import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class VariableService {


  constructor() { }
}


export interface ListPrice {
  Name: string,
  List: string,
  Price: number,
}

export interface Listtotal {
  Name: string,
  Price: number,
  Status: string,
  Pay: number
}
export interface towho {
  Name: string,
  Price: number,
  Status: string,
  Pay: number,
  payment:number,
  towho: string
}

export const name: string[] = [];
export const alllist: ListPrice[] = [];
export const total: Listtotal[] = [];
