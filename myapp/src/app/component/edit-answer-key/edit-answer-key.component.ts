import { Component, OnInit } from '@angular/core';
import { QueserviceService } from 'src/app/service/queservice.service';

@Component({
  selector: 'app-edit-answer-key',
  templateUrl: './edit-answer-key.component.html',
  styleUrls: ['./edit-answer-key.component.css']
})
export class EditAnswerKeyComponent implements OnInit {

  answerKey: any={};

  constructor(private service: QueserviceService) { }

  ngOnInit(): void {
  }

  Update(){
    this.service.editAnswerKey(this.answerKey)
    .subscribe()
  }

}
