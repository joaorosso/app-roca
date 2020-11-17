import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { Router } from '@angular/router';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
})
export class GridComponent implements OnInit {
  private data = [];

  @Input() set dataSource(values: any[]) {
    if (values && values.length > 0) {
      this.data = values;
    }
  }

  get dataSource(): any[] {
    return this.data;
  }

  @Input() loading: boolean;
  @Input() columns: any[];
  @Input() buttons: any[];
  @Output() removeEmit = new EventEmitter();
  @Output() actionEmit = new EventEmitter();
  @Output() addItem = new EventEmitter();
  selectedItems: string[];
  tableCols: any[];

  selection = new SelectionModel<any>(true, []);

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.tableCols = this.columns.map((x) => x.columnDef);
    this.tableCols.unshift('select');
    this.tableCols.push('action');

    this.selection = new SelectionModel<any>(true, []);
  }

  remove() {
    if (this.selection.selected.length > 0) {
      console.log(this.selection.selected);
      // this.removeEmit.emit(this.selection.selected);
    }
  }

  add() {
    console.log(this.selection.selected);
    // this.addItem.emit();
  }

  open(url, id) {
    this.router.navigate(['/' + url, id]);
  }

  viewRow(row) {
    console.log(row);
  }

  isAnySelected() {
    const numSelected = this.selection.selected.length;
    return numSelected > 0;
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.dataSource.forEach((row) => this.selection.select(row));
  }
}
