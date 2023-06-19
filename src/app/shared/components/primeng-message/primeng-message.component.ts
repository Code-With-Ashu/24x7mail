import { Component, Input, SimpleChanges } from '@angular/core';
import { Message } from 'primeng/api';

@Component({
  selector: 'app-primeng-message',
  templateUrl: './primeng-message.component.html',
  styleUrls: ['./primeng-message.component.scss']
})
export class PrimengMessageComponent {
  @Input() itemObject: any;
  messages: Message[] | undefined;
  keysLength = 0;
  ngOnInit() {
    this.messages = [{ severity: '', summary: '', detail: '' }];
    this.keysLength = Object.keys(this.messages).length;
  }

  ngOnChanges(changes: SimpleChanges) {
    // console.log("changes",changes['itemObject'].currentValue)

    if (typeof changes.itemObject != 'undefined') {
      this.messages = [changes['itemObject'].currentValue];
    }
  }
}
