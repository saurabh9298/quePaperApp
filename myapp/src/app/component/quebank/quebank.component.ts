import { Component, OnInit } from '@angular/core';
import {QueserviceService} from '../../service/queservice.service';
import { AuthService } from 'src/app/service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quebank',
  templateUrl: './quebank.component.html',
  styleUrls: ['./quebank.component.css']
})
export class QuebankComponent implements OnInit {

  quesBank : Array<any>=[];
  quesBank1 : Array<any>;

  constructor(private service: QueserviceService, private authService: AuthService, private router: Router) {
    this.service.getQueBankDetails()
    .subscribe(data=>this.quesBank.push(...data));
    this.quesBank1=this.quesBank;
   }

  ngOnInit(): void {
    if(!this.authService.isUserLoggedIn){
      this.router.navigate(['/login']);
    }
  }

}
