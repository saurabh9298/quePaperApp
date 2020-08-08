import { Component, OnInit } from '@angular/core';
import { QueserviceService } from 'src/app/service/queservice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-question-or-choice',
  templateUrl: './edit-question-or-choice.component.html',
  styleUrls: ['./edit-question-or-choice.component.css']
})
export class EditQuestionOrChoiceComponent implements OnInit {

  public cust;

  constructor(private service: QueserviceService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(p => {
      this.service.viewQuestionsAfterClick(p['bankclick'])
      .subscribe(data => this.cust = data);
  });
  }

}
