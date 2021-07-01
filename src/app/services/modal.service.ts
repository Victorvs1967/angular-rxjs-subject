import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

export type ModalState = 'open' | 'close';
@Injectable({
  providedIn: 'root'
})
export class ModalService {

  private display = new Subject<ModalState>();

  watch(): Observable<ModalState> {
    return this.display.asObservable();
  }

  open() {
    this.display.next('open');
  }

  close() {
    this.display.next('close');
  }

}
