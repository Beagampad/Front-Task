import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Dataset } from '../dataset';
import { DetailDataset } from '../detail-dataset';
import { TableService } from '../table.service';


const ELEMENT_DATA: DetailDataset[] = [
  {date: '15/03/2018', orderId: 'SSD14', orderCode: 'DEPOSIT', type: 'Payment received', credit:51515, balance: 515221},
  {date:  '15/03/2018', orderId: 'D51D54F', orderCode: 'ON RAMP', type: 'Payment received', credit:21445, balance:24244},
  {date: '15/03/2018', orderId: 'VBF51', orderCode: 'ON RAMP', type: 'Payment received', credit:6247, balance:4242},
  {date:  '15/03/2018', orderId: 'D51GF54', orderCode: 'DEPOSIT', type: 'Payment received', credit:32541, balance:4244},
  {date:  '15/03/2018', orderId: 'S515FS', orderCode: 'DEPOSIT', type: 'Payment received', credit:5145, balance: 3964},
  {date:  '15/03/2018', orderId: 'R41GR6', orderCode: 'SETTLEMENT', type: 'Payment received', credit:41841, balance:7854},
  {date: '15/03/2018', orderId: '161AD', orderCode: 'SETTLEMENT', type: 'Payment received', credit:4415156, balance:32145},
  {date: '15/03/2018', orderId: 'DFG1DF5', orderCode: 'DEPOSIT', type: 'Payment received', credit:12847, balance:9664},
  {date:  '15/03/2018', orderId: '1DF1D5', orderCode: 'ON RAMP', type:'Payment received', credit:1456, balance:745},
  {date:  '15/03/2018', orderId: 'S5812S5', orderCode: 'DEPOSIT', type: 'Payment received', credit:654174, balance: 16451},
];


@Component({
  selector: 'app-dataset-detail',
  templateUrl: './dataset-detail.component.html',
  styleUrls: ['./dataset-detail.component.css']
})
export class DatasetDetailComponent implements OnInit {

  //displayedColumns: string[] = ['Confirmed_Date', 'OrderID', 'Order_Code', 'Transaction_Type', 'Credit', 'Balance'];
  displayedColumns: string[] = ['date', 'orderId', 'orderCode', 'type', 'credit', 'balance']
  detail_dataset:Dataset | undefined;
  dataSource:DetailDataset[] = [];
  constructor(private tableService: TableService, private route: ActivatedRoute,) { }

  ngOnInit(): void {

    // First get the id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const IdFromRoute = Number(routeParams.get('id_dataset'));
    this.dataSource = ELEMENT_DATA;

    this.detail_dataset = this.getDatasetbyId(IdFromRoute);
    console.log('detail', this.detail_dataset);

  }
    // Find detail by ID
    getDatasetbyId(IdFromRoute:number){

     return  this.tableService.data.find((x => x.id_dataset === IdFromRoute))
  }

}
