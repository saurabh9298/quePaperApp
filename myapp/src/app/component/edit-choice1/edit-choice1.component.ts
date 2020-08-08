import { Component, OnInit } from '@angular/core';
import { QueserviceService } from 'src/app/service/queservice.service';

@Component({
  selector: 'app-edit-choice1',
  templateUrl: './edit-choice1.component.html',
  styleUrls: ['./edit-choice1.component.css']
})
export class EditChoice1Component implements OnInit {

  choice: any={};

  constructor(private service: QueserviceService) { }

  ngOnInit(): void {
  }

  Update(){
    this.service.editChoice1(this.choice)
    .subscribe();
  }

}
