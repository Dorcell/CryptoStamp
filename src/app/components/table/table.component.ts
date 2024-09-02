import { Component, Input, OnChanges } from '@angular/core';
import { UserModel } from '../../models/user';
import { Columns } from '../../enums/columns'
 
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})

export class TableComponent implements OnChanges {
  @Input() public selectedColumns: string[] = [];
  @Input() public rowsCount?: number = 10;
  @Input() public tableData: UserModel[] = [];
  public columnNames: string[] = [];

  ngOnChanges(): void {
    this.columnNames = Object.entries(Columns)
      .filter((column) => this.selectedColumns.includes(column[0]))
      .map(column => column[1]);
  }
}
