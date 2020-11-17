import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Roca } from '../models/roca';
import { RocasService } from '../rocas/rocas.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent implements OnInit {
  rocas$: Observable<Roca[]>;

  /** Table columns */
  columns = [
    {
      columnDef: 'descricao',
      header: 'DESCRIÇÃO',
      cell: (row: any) => row.descricao,
    },
    {
      columnDef: 'despesa',
      header: 'DESPESA',
      cell: (row: any) => row.despesa || 0,
      isCurrency: true,
    },
    {
      columnDef: 'lucro',
      header: 'LUCRO',
      cell: (row: any) => row.lucro || 0,
      isCurrency: true,
    },
  ];

  buttons = [
    {
      type: 'view',
      url: 'despesas',
      icon: 'fa fa-pencil',
      text: 'Editar'
    }
  ];

  constructor(private rocasService: RocasService) {}

  ngOnInit(): void {
    this.rocas$ = this.rocasService.getRocas(status);
  }

  removeItems(items) {
    console.log('remove item');
    // if (items) {
    //   const initialState = {
    //     title: `Apagar as roças selecionadas?`,
    //   };
    //   this.modalRef = this.modalService.show(ConfirmationDialogComponent, {
    //     class: 'modal-sm',
    //     initialState,
    //   });
    //   this.modalRef.content.onClose.subscribe((result) => {
    //     if (result) {
    //       this.rocasService.removeAll(items).subscribe(() => this.getRocas());
    //     }
    //   });
    // }
  }

  addItem() {
    console.log('add item');
    // this.router.navigate(['/nova-roca']);
  }
}
