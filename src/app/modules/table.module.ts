import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { MultiSelectModule } from 'primeng/multiselect';
import { ColumnFilterComponent } from "../components/column-filter/column-filter.component";
import { HomePageComponent } from "../components/home-page/home-page.component";
import { PaginatorComponent } from "../components/paginator/paginator.component";
import { TableComponent } from "../components/table/table.component";
import { ApiService } from "../services/api.service";

@NgModule({
  imports: [BrowserModule, MultiSelectModule, FormsModule ],
  declarations: [HomePageComponent, TableComponent, PaginatorComponent, ColumnFilterComponent],
  exports: [HomePageComponent],
  providers: [ApiService]
})

export class TableModule {};