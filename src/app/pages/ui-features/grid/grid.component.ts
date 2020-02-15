import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'ngx-grid',
  styleUrls: ['./grid.component.scss'],
  templateUrl: './grid.component.html',
})
export class GridComponent {
  constructor (private http: HttpClient) {}

  responseMessage: string;

  sendMailing(content: string) {
    if (content) {
      this.http.post('http://95.179.132.10:4615/mailing', {}, {
        params: { mailingText: content },
        responseType: 'blob' as 'json',
      }).subscribe(() => {
        this.responseMessage = '✅Рассылка запущена успешно!';
      });
    }
  }
}
