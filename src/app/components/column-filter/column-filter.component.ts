import { Component, EventEmitter, Output } from '@angular/core';
import { Columns } from '../../enums/columns';
import { ColumnModel } from '../../models/column';

@Component({
  selector: 'app-column-filter',
  templateUrl: './column-filter.component.html',
  styleUrl: './column-filter.component.scss'
})
export class ColumnFilterComponent {
  @Output() public filterColumnsEvent = new EventEmitter<string[]>();
  public selectedColumns: string[] = [];
  public columns: ColumnModel[] = Object.entries(Columns).map(value => ({ key: value[0], name: value[1] }));
}
