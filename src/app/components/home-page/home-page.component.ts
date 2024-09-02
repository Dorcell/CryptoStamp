import { Component } from '@angular/core';
import { Columns } from '../../enums/columns';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  public selectedColumns: string[] = Object.keys(Columns) as string[];

  public onFilterColumns(columns?: string[]): void {
    this.selectedColumns = columns?.length ? columns : Object.keys(Columns) as string[];
  }
}
