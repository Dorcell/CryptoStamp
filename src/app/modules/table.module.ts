import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ColumnFilterComponent } from "../components/column-filter/column-filter.component";
import { PaginatorComponent } from "../components/paginator/paginator.component";
import { TableComponent } from "../components/table/table.component";
import { ApiService } from "../services/api.service";

@NgModule({
  imports: [BrowserModule],
  declarations: [TableComponent, PaginatorComponent, ColumnFilterComponent],
  exports: [TableComponent, PaginatorComponent, ColumnFilterComponent],
  providers: [ApiService]
})

export class TableModule {};