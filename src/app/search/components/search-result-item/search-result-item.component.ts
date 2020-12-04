import {Component, Input, OnInit, EventEmitter, Output} from '@angular/core';
import {Album} from '../../../album.interface';

@Component({
  selector: 'app-search-result-item',
  templateUrl: './search-result-item.component.html',
  styleUrls: ['./search-result-item.component.scss'],
})
export class SearchResultItemComponent implements OnInit {
  @Input() item: Album;
  @Input() isBookmarked: boolean;
  @Output() toggled = new EventEmitter<Album>();

  constructor() {}

  ngOnInit() {}

  toggle(item: Album) {
    this.toggled.emit(item);
  }
}
