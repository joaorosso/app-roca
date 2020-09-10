import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  // removeItems(items) {
  //   if (items) {
  //     const initialState = {
  //       title: `Apagar as roças selecionadas?`,
  //     };
  //     this.modalRef = this.modalService.show(ConfirmationDialogComponent, {
  //       class: 'modal-sm',
  //       initialState,
  //     });
  //     this.modalRef.content.onClose.subscribe((result) => {
  //       if (result) {
  //         this.rocasService.removeAll(items).subscribe(() => this.getRocas());
  //       }
  //     });
  //   }
  // }

  // addItem() {
  //   this.router.navigate(['/nova-roca']);
  // }

}
