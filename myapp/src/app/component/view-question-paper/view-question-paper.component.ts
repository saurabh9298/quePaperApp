import { Component, OnInit } from '@angular/core';
import { QueserviceService } from 'src/app/service/queservice.service';
import { AuthService } from 'src/app/service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-question-paper',
  templateUrl: './view-question-paper.component.html',
  styleUrls: ['./view-question-paper.component.css']
})
export class ViewQuestionPaperComponent implements OnInit {

  quespaper: Array<any>=[];

  constructor(private service: QueserviceService, private authService: AuthService, private router: Router) { 
    this.service.getQuestionPaper()
    .subscribe(data=>this.quespaper.push(...data));
  }

  ngOnInit(): void {
    if(!this.authService.isUserLoggedIn){
      this.router.navigate(['/login']);
    }
  }

}
