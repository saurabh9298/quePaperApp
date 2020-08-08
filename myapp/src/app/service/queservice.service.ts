import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class QueserviceService {

  baseUrl1="http://localhost:3000/quebank/";
  baseUrl3="http://localhost:3000/quebank/add-new-question-bank/ok";
  baseUrl2="http://localhost:3000/quelisttt/";
  baseUrl4="http://localhost:3000/quebank/add-new-question/";
  baseUrl5="http://localhost:3000/quebank/edit-bank-name/";
  baseUrl6="http://localhost:3000/quebank/edit-answer-key/";

  baseUrl7="http://localhost:3000/quebank/edit-question/";
  baseUrl8="http://localhost:3000/quebank/edit-choice1/";
  baseUrl9="http://localhost:3000/quebank/edit-choice2/";
  baseUrl10="http://localhost:3000/quebank/edit-choice3/";
  baseUrl11="http://localhost:3000/quebank/edit-choice4/";

//=============================================================

  baseUrl12="http://localhost:3000/questionpaper/";
  baseUrl13="http://localhost:3000/addnewquestionpaper/";
  baseUrl14="http://localhost:3000/addnewquestionpaper/show-questions-to-create-question-paper/";
  baseUrl15="http://localhost:3000/addnewquestionpaper/questions-added/";
  baseUrl16="http://localhost:3000/addnewquestionpaper/delete-question-from-question-paper/";
  baseUrl17="http://localhost:3000/questionpaper/view-questions-in-a-particular-question-paper/";

  constructor(private http: HttpClient, private authService: AuthService) { }

  public link:string;

  getQueBankDetails() : Observable<any>{
    const options={
      headers:{
        'Authorization': 'JWT' + this.authService.token
      }
    };
    return this.http.get(this.baseUrl1);
  }
  // getQuestionsDetails() : Observable<any>{
  //   return this.http.get(this.baseUrl2);
  // }
  
  viewQuestionsAfterClick(bankname: string) :Observable<any>{
    return this.http.get(this.baseUrl1+bankname)
  }


  addNewQuestionBank(bank: any): Observable <any>{
    return this.http.post(this.baseUrl3, bank);
  }
  addNewQuestion(bank: any): Observable <any>{
      this.link = window.location.href;
      // console.log(this.link)
      var n = this.link.lastIndexOf('/');
      this.link = this.link.substring(n + 1);
      // console.log(this.link)
      
    return this.http.post(this.baseUrl4+this.link+"/", bank);
  }

  editBankName(bank: any): Observable<any>{
      this.link = window.location.href;
      var n = this.link.lastIndexOf('/');
      this.link = this.link.substring(n + 1);
      // console.log(this.link)
      return this.http.post(this.baseUrl5+this.link, bank);
  }

  editAnswerKey(bank: any): Observable<any>{
      this.link = window.location.href;
      var n = this.link.lastIndexOf('/');
      this.link = this.link.substring(n + 1);
      return this.http.post(this.baseUrl6+this.link, bank);
  }

  editQuestion(bank: any): Observable<any>{
      this.link = window.location.href;
      var n = this.link.lastIndexOf('/');
      this.link = this.link.substring(n + 1);
      return this.http.post(this.baseUrl7+this.link, bank);
  }

  editChoice1(choice: any): Observable<any>{
      return this.http.post(this.baseUrl8+window.location.href.substring(window.location.href.lastIndexOf('/') + 1), choice);
  }

  editChoice2(choice: any): Observable<any>{
      return this.http.post(this.baseUrl9+window.location.href.substring(window.location.href.lastIndexOf('/') + 1), choice);
  }

  editChoice3(choice: any): Observable<any>{
      return this.http.post(this.baseUrl10+window.location.href.substring(window.location.href.lastIndexOf('/') + 1), choice);
  }

  editChoice4(choice: any): Observable<any>{
      return this.http.post(this.baseUrl11+window.location.href.substring(window.location.href.lastIndexOf('/') + 1), choice);
  }

  getQuestionPaper(): Observable <any>{
    return this.http.get(this.baseUrl12);
  }

  addNewQuestionPaper(paper: any): Observable <any>{
    return this.http.post(this.baseUrl13, paper);
  }

  getQuestionsToCreateQuestionPaper(): Observable <any>{
    return this.http.get(this.baseUrl14);
  }
  
  addQuestionToQuestionPaper(ques: any): Observable <any>{
    return this.http.post(this.baseUrl15+window.location.href.substring(window.location.href.lastIndexOf('/') + 1), ques);
  }

  deleteQuestionFromQuestionPaper(ques: any): Observable <any>{
    return this.http.post(this.baseUrl16, ques);
  }

  viewQuestionsInAParticularQuestionPaper(): Observable <any>{
    return this.http.get(this.baseUrl17+window.location.href.substring(window.location.href.lastIndexOf('/') + 1));
  }


  getCurrentBank(){
    return this.link;
  }

}
