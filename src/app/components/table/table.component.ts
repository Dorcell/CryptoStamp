import { Component } from '@angular/core';
import { UserModel } from '../../models/user';
import { ApiService } from '../../services/api.service';
import { Columns } from '../../enums/columns'
 
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})

export class TableComponent {
  public columns: string[] = Object.keys(Columns) as string[];
  public columnNames: string[] = Object.values(Columns) as string[];
  public tableData: UserModel[] = [];
  constructor(private  api: ApiService) { }

  ngOnInit(): void {
    this.getAllData();
  }

  public getAllData(): void {
    this.api.getData().subscribe(res => {
      this.tableData = res;
    })
  }
}
