import { Component, OnInit } from '@angular/core';
import { QueserviceService } from 'src/app/service/queservice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-quebankafterclick',
  templateUrl: './quebankafterclick.component.html',
  styleUrls: ['./quebankafterclick.component.css']
})
export class QuebankafterclickComponent implements OnInit {

  constructor(private service:QueserviceService, private activatedRoute: ActivatedRoute, private router: Router) { }

  public que;

  ngOnInit(): void {
    // console.log(this.linkk);
      this.activatedRoute.params.subscribe(p=>{
      this.service.viewQuestionsAfterClick(p['bankclick'])
      .subscribe(data=>this.que=data);
    });

  }
}
