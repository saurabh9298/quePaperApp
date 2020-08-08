import { Component, OnInit } from '@angular/core';
import { QueserviceService } from 'src/app/service/queservice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-new-question',
  templateUrl: './add-new-question.component.html',
  styleUrls: ['./add-new-question.component.css']
})
export class AddNewQuestionComponent implements OnInit {

  que: any = {};
  public link: string;

  constructor(private service: QueserviceService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  save() {
      this.link = window.location.href;
      console.log(this.link)
      var n = this.link.lastIndexOf('/');
      this.link = this.link.substring(n + 1);
      console.log(this.link)

      this.service.addNewQuestion(this.que)
      .subscribe(()=>this.router.navigate(['/quebank']));
  }

}
