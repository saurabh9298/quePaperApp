import { Component, OnInit } from '@angular/core';
import { QueserviceService } from 'src/app/service/queservice.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-add-question-paper',
  templateUrl: './add-question-paper.component.html',
  styleUrls: ['./add-question-paper.component.css']
})
export class AddQuestionPaperComponent implements OnInit {

  paper: any={};

  constructor(private service: QueserviceService, private router: Router, private authService: AuthService) { }

  ngOnInit(): void {

    // if(!this.authService.isUserLoggedIn){
    //   this.router.navigate(['/login']);
    // }
  }

  save(){
    this.service.addNewQuestionPaper(this.paper)
    .subscribe();
  }

}
