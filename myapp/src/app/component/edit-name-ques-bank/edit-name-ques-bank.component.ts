import { Component, OnInit } from '@angular/core';
import { QueserviceService } from 'src/app/service/queservice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-name-ques-bank',
  templateUrl: './edit-name-ques-bank.component.html',
  styleUrls: ['./edit-name-ques-bank.component.css']
})
export class EditNameQuesBankComponent implements OnInit {

  bankname: any={};

  constructor(private service: QueserviceService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  Save(){
        this.service.editBankName(this.bankname)
        .subscribe(()=>{this.router.navigate(['/quebank'])});
  }

}
