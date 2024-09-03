import { Injectable } from "@angular/core";
import { Sort } from "../models/sort";
import { UserRow } from "../models/user";

@Injectable({
  providedIn: 'root'
})

export class TableService {
  public search(array: UserRow[], searchText: string): UserRow[] {
    return array.filter(row => Object.values(row).some((value) => {
      return value !== null && value !== undefined
        ? value?.toString().toLowerCase().includes(searchText.toLowerCase())
        : false;
    }));
  }

  public sort(array: UserRow[], sortParams: Sort): UserRow[] {
    return array.sort((a, b) => {
      if (sortParams.sortField in a) {
        const extractA = a[sortParams.sortField as keyof UserRow]?.toString() ?? '';
        const extractB = b[sortParams.sortField as keyof UserRow]?.toString() ?? '';
        return sortParams.sort === 'asc' ? extractA.localeCompare(extractB) : extractB.localeCompare(extractA);
      } else {
        return -1;
      }
    })
  }

  public setSort(currentSort: Sort, sortKey: string, defaultSortKey = ''): Sort {
    const newSort = new Sort();
    if (currentSort.sortField === sortKey) {
      newSort.sortField = currentSort.sort === 'asc' ? sortKey : defaultSortKey;
      newSort.sort = currentSort.sort === 'asc' ? 'desc' : 'asc';
    } else {
      newSort.sortField = sortKey;
      newSort.sort = 'asc';
    }
    return newSort;
   }
}