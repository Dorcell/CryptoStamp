import { Component, EventEmitter, Output } from '@angular/core';
import { Columns } from '../../enums/columns';
import { ColumnsModel } from '../../models/columns';

@Component({
  selector: 'app-column-filter',
  templateUrl: './column-filter.component.html',
  styleUrl: './column-filter.component.scss'
})
export class ColumnFilterComponent {
  @Output() public filterColumnsEvent = new EventEmitter<string[]>();
  public selectedColumns: string[] = [];
  public columns: ColumnsModel[] = Object.entries(Columns).map(value => ({ key: value[0], name: value[1] }));
}
