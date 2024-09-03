import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss'
})
export class SearchBarComponent {
  @Output() public searchEvent = new EventEmitter<string>();
  public searchText: string = '';

  public enterText(event: KeyboardEvent): void {
    if(event.key === 'Enter') {
      this.searchEvent.emit(this.searchText);
    }
  }
}
