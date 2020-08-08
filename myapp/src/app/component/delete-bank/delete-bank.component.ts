import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { QueserviceService } from 'src/app/service/queservice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete-bank',
  templateUrl: './delete-bank.component.html',
  styleUrls: ['./delete-bank.component.css']
})
export class DeleteBankComponent implements OnInit {

  public link: string;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }
  GoTo() {
        this.link=window.location.href;
        var n = this.link.lastIndexOf('/');
        this.link = this.link.substring(n + 1);
        // console.log(this.link)
        // console.log('http://localhost:3000/quebank/delete/'+this.link)
        this.http.get('http://localhost:3000/quebank/delete-bank/'+this.link)
        .subscribe(()=>this.router.navigate(['/quebank']));
        // this.router.navigate(['/quebank']);
  }

}
