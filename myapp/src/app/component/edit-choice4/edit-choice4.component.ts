import { Component, OnInit } from '@angular/core';
import { QueserviceService } from 'src/app/service/queservice.service';

@Component({
  selector: 'app-edit-choice4',
  templateUrl: './edit-choice4.component.html',
  styleUrls: ['./edit-choice4.component.css']
})
export class EditChoice4Component implements OnInit {

  choice: any={};

  constructor(private service: QueserviceService) { }

  ngOnInit(): void {
  }

  Update(){
    this.service.editChoice4(this.choice)
    .subscribe();
  }

}
