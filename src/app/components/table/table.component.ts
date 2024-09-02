import { Component, Input, OnChanges } from '@angular/core';
import { UserModel } from '../../models/user';
import { ApiService } from '../../services/api.service';
import { Columns } from '../../enums/columns'
 
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})

export class TableComponent implements OnChanges {
  @Input() public selectedColumns: string[] = [];
  public columnNames: string[] = [];
  public tableData: UserModel[] = [];
  constructor(private  api: ApiService) { }

  ngOnInit(): void {
    this.getAllData();
  }

  ngOnChanges(): void {
    this.columnNames = Object.entries(Columns)
      .filter((column) => this.selectedColumns.includes(column[0]))
      .map(column => column[1]);
  }

  public getAllData(): void {
    this.api.getData().subscribe(res => {
      this.tableData = res;
    })
  }
}
