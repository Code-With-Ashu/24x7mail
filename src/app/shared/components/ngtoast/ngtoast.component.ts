import { Component } from '@angular/core';
import { MessageService, PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-ngtoast',
  templateUrl: './ngtoast.component.html',
  styleUrls: ['./ngtoast.component.scss'],
  providers: [MessageService]

})
export class NgtoastComponent {
  constructor(private messageService: MessageService,
    private primengConfig: PrimeNGConfig) {
  }
  ngOnInit() {

    this.primengConfig.ripple = true;

    
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Message Content' });
    this.messageService.add({ severity: 'info', summary: 'Info', detail: 'Message Content' });
    this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Message Content' });
    this.messageService.add({ severity: 'warn', summary: 'Warn', detail: 'Message Content' });

  }

  
  show() {
  }
}
