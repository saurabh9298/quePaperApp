import { Component, OnInit } from '@angular/core';
import { QueserviceService } from 'src/app/service/queservice.service';

@Component({
  selector: 'app-edit-choice3',
  templateUrl: './edit-choice3.component.html',
  styleUrls: ['./edit-choice3.component.css']
})
export class EditChoice3Component implements OnInit {

  choice: any={};

  constructor(private service: QueserviceService) { }

  ngOnInit(): void {
  }

  Update(){
    this.service.editChoice3(this.choice)
    .subscribe();
  }

}
