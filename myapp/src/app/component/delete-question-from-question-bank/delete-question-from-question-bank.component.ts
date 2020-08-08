import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-question-from-question-bank',
  templateUrl: './delete-question-from-question-bank.component.html',
  styleUrls: ['./delete-question-from-question-bank.component.css']
})
export class DeleteQuestionFromQuestionBankComponent implements OnInit {

  public link: string;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

  GoTo() {
    this.link=window.location.href;
    // console.log(this.link)
    var n = this.link.lastIndexOf('/');
    this.link = this.link.substring(n + 1);
    // console.log(this.link)
    // console.log('http://localhost:3000/quebank/delete/'+this.link)
    this.http.get('http://localhost:3000/quebank/delete-question/'+this.link)
    .subscribe(()=>this.router.navigate(['/quebank']));
    // this.router.navigate(['/quebank']);
}

}
