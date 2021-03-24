import { Component, OnInit } from '@angular/core';
import { TableService } from '../table.service';
import { Dataset } from '../dataset';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  displayedColumns: string[] = ['name', 'category', 'tags', 'balance', 'available'];
  dataSource: Dataset[] = [];
  exchange:number = 0;
  dollars_balance:number = 0;
  dollars_available:number = 0;

  constructor(private tableService: TableService) { }

  ngOnInit(): void {

    this.getUpdates(); // get data BBDD
    this.getData();

    //A new exchange rate should be pushed to the frontend every 30 seconds. (simulated way)
    setInterval(() => {
      this.getData();
    }, 30000);

  }

   getData(): void {
     this.getExchange();
    this.tableService.getAll().subscribe((res) => {
          console.log('res', res);
          this.dataSource = res;
          this.tableService.data = res;

          res.forEach((element: { balance: number; available: number; }) => {
            this.BTCtoDollar(element.balance, element.available);
          });
    });
  }

  getExchange(): void {
    this.tableService.getExchange().subscribe((res) => {
          //console.log('exchange', res);
          this.exchange = res;
    });
  }

  getUpdates(): void {
    this.tableService.getUpdates().subscribe((res) => {
          console.log('exchange', res);
          //this.exchange = res;
    });
  }

  BTCtoDollar(balance:number, available:number){

    this.dollars_balance = balance*this.exchange;
    this.dollars_available = available*this.exchange

  }

}
