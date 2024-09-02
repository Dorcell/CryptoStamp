import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { MultiSelectModule } from 'primeng/multiselect';
import { PaginatorModule } from 'primeng/paginator';
import { ColumnFilterComponent } from "../components/column-filter/column-filter.component";
import { HomePageComponent } from "../components/home-page/home-page.component";
import { TableComponent } from "../components/table/table.component";
import { ApiService } from "../services/api.service";
import { SearchBarComponent } from "../components/search-bar/search-bar.component";

@NgModule({
  imports: [BrowserModule, MultiSelectModule, PaginatorModule, FormsModule],
  declarations: [HomePageComponent, TableComponent, ColumnFilterComponent, SearchBarComponent],
  exports: [HomePageComponent],
  providers: [ApiService]
})

export class TableModule {};