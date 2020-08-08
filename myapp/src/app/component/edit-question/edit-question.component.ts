import { Component, OnInit } from '@angular/core';
import { QueserviceService } from 'src/app/service/queservice.service';

@Component({
  selector: 'app-edit-question',
  templateUrl: './edit-question.component.html',
  styleUrls: ['./edit-question.component.css']
})
export class EditQuestionComponent implements OnInit {

  ques: any={};

  constructor(private service : QueserviceService) { }

  ngOnInit(): void {
  }

  Update(){
    this.service.editQuestion(this.ques)
    .subscribe()
  }

}
