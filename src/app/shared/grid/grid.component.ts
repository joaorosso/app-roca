import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTable, MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
})
export class GridComponent implements OnInit, OnChanges {
  tableDataSrc: any;
  tableCols: string[] = ['descricao', 'despesa', 'lucro'];

  @Input() items: {}[];
  @Input() tableItem: any[];

  @Input() loading: boolean;
  @Output() removeEmit = new EventEmitter();
  @Output() addItem = new EventEmitter();
  selectedItems: string[];

  // @ViewChild('table', {static: false}) table: MatTable<Element>;
  @ViewChild('table') table: MatTable<Element>;
  // @ViewChild(MatTable) table: MatTable<any>;

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    this.cleanSelectedItems();
  }

  ngOnInit(): void {
    console.log(this.items);
    this.tableDataSrc = new MatTableDataSource(this.items);
    this.table.renderRows();
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
