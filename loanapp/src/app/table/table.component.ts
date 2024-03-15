import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { TableService } from './../table.service';

export interface Table {
  name: string;
  email: string;
  number: string;
  ippis: string;
  amount: number;
  tenor: string;
  date: string;
  mode: string;
  mda: string;
  actions: string;
}
 
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
})
export class TableComponent implements OnInit {
  displayedColumns: any[] = [
    'name',
    'email',
    'number',
    'ippis',
    'amount',
    'tenor',
    'date',
    'mode',
    'mda',
    'actions',
  ];

  dataSource!: MatTableDataSource<Table>;
  isLoading: boolean = true;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  loanTables: any;

  constructor(private readonly tableService: TableService) {
  }

  ngOnInit(): void {
    this.getTableData();
  }

  getTableData() {
    this.tableService.getTable().subscribe(
      (response: Table[]) => {
        console.log(response);
        this.dataSource = new MatTableDataSource<Table>(response);
        this.isLoading = false;
        this.dataSource.paginator = this.paginator;
      },
      (error) => {
        console.error('Error fetching data:', error);
        this.isLoading = false;
      }
    );
  }
}
