import { Component } from '@angular/core';
import { PaginatorState } from 'primeng/paginator';
import { Columns } from '../../enums/columns';
import { UserModel } from '../../models/user';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  public selectedColumns: string[] = Object.keys(Columns) as string[];
  public tableData: UserModel[] = [];
  public tableDisplayData: UserModel[] = [];
  public totalCount: number = 0;
  public rowsCount: number = 10;
  constructor(private  api: ApiService) { }

  ngOnInit(): void {
    this.getAllData();
  }

  public onFilterColumns(columns?: string[]): void {
    this.selectedColumns = columns?.length ? columns : Object.keys(Columns) as string[];
  }

  public getAllData(): void {
    this.api.getData().subscribe(res => {
      this.tableData = res;
      this.tableDisplayData = this.tableData.slice(0, this.rowsCount);
      this.totalCount = res.length;
    })
  }
  public onPageChange(value : PaginatorState): void {
    this.rowsCount = value.rows ?? 10;
    if (typeof(value.first) === 'number')
      this.tableDisplayData = this.tableData.slice(value.first, value.first + this.rowsCount);
    console.log(value)
  }
}
