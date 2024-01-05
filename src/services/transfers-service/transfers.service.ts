import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransfersService {

  constructor() { }

  transfers=[
    {"timestamp":1703954497,"sender":"Client 1","reciever":"Client 2","amount":2000},
    {"timestamp":1703945878,"sender":"Client 1","reciever":"Client 2","amount":2000},
    {"timestamp":1703945878,"sender":"Client 1","reciever":"Client 2","amount":2000},
    {"timestamp":1703945878,"sender":"Client 1","reciever":"Client 2","amount":2000},
    {"timestamp":1703945878,"sender":"Client 1","reciever":"Client 2","amount":2000},
    {"timestamp":1703945878,"sender":"Client 1","reciever":"Client 2","amount":2000},
    {"timestamp":1703945878,"sender":"Client 1","reciever":"Client 2","amount":2000},
    {"timestamp":1703945878,"sender":"Client 1","reciever":"Client 2","amount":2000},
    {"timestamp":1703945878,"sender":"Client 1","reciever":"Client 2","amount":2000},
  ]

  getTransfers(){
    return this.transfers.sort((a, b) => b.timestamp - a.timestamp);
  }
}
