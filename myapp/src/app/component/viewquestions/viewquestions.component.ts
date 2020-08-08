import { Component, OnInit } from '@angular/core';
import { QueserviceService } from 'src/app/service/queservice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-viewquestions',
  templateUrl: './viewquestions.component.html',
  styleUrls: ['./viewquestions.component.css']
})
export class ViewquestionsComponent implements OnInit {

  public cust;

  constructor(private service: QueserviceService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

        // console.log('view ques', this.activatedRoute.params.subscribe());
        
        this.activatedRoute.params.subscribe(p => {
        this.service.viewQuestionsAfterClick(p['bankclick'])
        .subscribe(data => this.cust = data);
    });

  }
}
