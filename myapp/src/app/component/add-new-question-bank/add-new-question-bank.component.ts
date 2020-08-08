import { Component, OnInit } from '@angular/core';
import { QueserviceService } from 'src/app/service/queservice.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-add-new-question-bank',
  templateUrl: './add-new-question-bank.component.html',
  styleUrls: ['./add-new-question-bank.component.css']
})
export class AddNewQuestionBankComponent implements OnInit {

  ques: any={};

  constructor(private service: QueserviceService, private http: HttpClient, private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    
  }

  save(): void{
    this.service.addNewQuestionBank(this.ques)
    .subscribe(()=>this.router.navigate(['/quebank']));
  }

}
