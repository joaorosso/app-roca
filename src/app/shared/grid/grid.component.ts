import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
})
export class GridComponent implements OnInit, OnChanges {
  tableCols: string[] = ['descricao', 'despesa', 'lucro'];
  private _data = [];
  @Input() set data(values: any[]) {
    if (values && values.length > 0) {
      this._data = values;
    }
  }
  get data(): any[] {
    return this._data;
  }

  @Input() loading: boolean;
  @Output() removeEmit = new EventEmitter();
  @Output() addItem = new EventEmitter();
  selectedItems: string[];

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    this.cleanSelectedItems();
  }

  ngOnInit(): void {
  }

  remove() {
    if (this.selectedItems.length > 0) {
      this.removeEmit.emit(this.selectedItems);
    }
  }

  add() {
    this.addItem.emit();
  }

  change(id) {
    if (this.selectedItems.find(item => item === id)) {
      this.selectedItems = this.selectedItems.filter(item => item !== id);
    } else {
      this.selectedItems.push(id);
    }
  }

  cleanSelectedItems() {
    this.selectedItems = [];
  }
}
