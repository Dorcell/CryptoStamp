import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { UserRow } from '../../models/user';
import { Columns } from '../../enums/columns'
import { ColumnModel } from '../../models/column';
import { Sort } from '../../models/sort';
import { TableService } from '../../services/table.service';
 
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})

export class TableComponent implements OnChanges {
  @Input() public selectedColumns: string[] = [];
  @Input() public tableData: UserRow[] = [];
  @Output() public sortEvent = new EventEmitter<Sort>();
  public columns: ColumnModel[] = [];
  public sortParams: Sort = { sortField: '', sort: ''};
  constructor(private tableService: TableService) {}

  ngOnChanges(): void {
    this.columns = Object.entries(Columns)
      .filter((column) => this.selectedColumns.includes(column[0]))
      .map(value => ({ key: value[0], name: value[1] }))
  }

  public setSort(value: string): void {
    this.sortParams = this.tableService.setSort(this.sortParams, value, this.selectedColumns[0]);
    this.sortEvent.emit(this.sortParams);
  }
}
