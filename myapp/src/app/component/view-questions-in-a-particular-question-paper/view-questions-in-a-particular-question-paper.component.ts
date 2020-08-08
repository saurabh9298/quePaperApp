import { Component, OnInit } from '@angular/core';
import { QueserviceService } from 'src/app/service/queservice.service';

@Component({
  selector: 'app-view-questions-in-a-particular-question-paper',
  templateUrl: './view-questions-in-a-particular-question-paper.component.html',
  styleUrls: ['./view-questions-in-a-particular-question-paper.component.css']
})
export class ViewQuestionsInAParticularQuestionPaperComponent implements OnInit {

  questions : Array<any>=[];

  constructor(private service: QueserviceService) {
    this.service.viewQuestionsInAParticularQuestionPaper()
    .subscribe(data=>this.questions.push(...data));
   }

  ngOnInit(): void {
  }

}
