import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  private display: Subject<boolean> = new Subject();

  watch(): Observable<boolean> {
    return this.display.asObservable();
  }

  open() {
    this.display.next(true);
  }

  close() {
    this.display.next(false);
  }

}
