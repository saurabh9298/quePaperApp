import { Component, OnInit } from '@angular/core';
import { QueserviceService } from 'src/app/service/queservice.service';

@Component({
  selector: 'app-edit-choice2',
  templateUrl: './edit-choice2.component.html',
  styleUrls: ['./edit-choice2.component.css']
})
export class EditChoice2Component implements OnInit {

  choice: any={};

  constructor(private service: QueserviceService) { }

  ngOnInit(): void {
  }

  Update(){
    this.service.editChoice2(this.choice)
    .subscribe();
  }

}
