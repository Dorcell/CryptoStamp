import { Component } from '@angular/core';
import { PaginatorState } from 'primeng/paginator';
import { Columns } from '../../enums/columns';
import { Sort } from '../../models/sort';
import { UserRow } from '../../models/user';
import { ApiService } from '../../services/api.service';
import { TableService } from '../../services/table.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  public selectedColumns: string[] = Object.keys(Columns) as string[];
  public tableDisplayData: UserRow[] = [];
  public totalCount: number = 0;
  public rowsCount: number = 10;
  private currentPage: number = 0;
  private tableData: UserRow[] = [];

  constructor(private api: ApiService, private tableService: TableService) {}

  ngOnInit(): void {
    this.getAllData();
  }

  public onFilterColumns(columns?: string[]): void {
    this.selectedColumns = columns?.length ? columns : Object.keys(Columns) as string[];
  }

  public getAllData(): void {
    this.api.getData().subscribe((res: UserRow[]) => {
      this.tableData = res;
      this.tableDisplayData = this.tableData.slice(0, this.rowsCount);
      this.totalCount = res.length;
    })
  }
  public onPageChange(value: PaginatorState): void {
    this.rowsCount = value.rows ?? 10;
    this.currentPage = value.page ?? 1;
    if (typeof(value.first) === 'number')
      this.tableDisplayData = this.tableData.slice(value.first, value.first + this.rowsCount);
  }

  public onSearch(searchText: string): void {
    const searchRows = this.tableService.search(this.tableData, searchText);
    this.tableDisplayData = searchRows.slice(0, this.rowsCount);
    this.totalCount = searchRows.length;
  }

  public onSort(sortParams: Sort): void {
    this.tableData = this.tableService.sort(this.tableData, sortParams);
    this.tableDisplayData = this.tableData.slice(this.currentPage, this.rowsCount);
  }
}
