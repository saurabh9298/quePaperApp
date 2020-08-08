import { Component, OnInit } from '@angular/core';
import { QueserviceService } from 'src/app/service/queservice.service';

@Component({
  selector: 'app-add-questions-to-question-paper',
  templateUrl: './add-questions-to-question-paper.component.html',
  styleUrls: ['./add-questions-to-question-paper.component.css']
})
export class AddQuestionsToQuestionPaperComponent implements OnInit {

  quespaper: Array<any>=[];

  constructor(private service: QueserviceService) { 
    this.service.getQuestionsToCreateQuestionPaper()
    .subscribe(data=>this.quespaper.push(...data));
  }

  ngOnInit(): void {
  }

  add(i: any){
    this.service.addQuestionToQuestionPaper(this.quespaper[i])
    .subscribe();
  }

  remove(i: any){
    this.service.deleteQuestionFromQuestionPaper(this.quespaper[i])
    .subscribe();
  }

}
