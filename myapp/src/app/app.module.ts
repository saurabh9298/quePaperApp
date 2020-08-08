import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Route, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { HeaderComponent } from './component/header/header.component';
import { QuebankComponent } from './component/quebank/quebank.component';
import { QuebankafterclickComponent } from './component/quebankafterclick/quebankafterclick.component';
import { ViewquestionsComponent } from './component/viewquestions/viewquestions.component';
import { AddNewQuestionComponent } from './component/add-new-question/add-new-question.component';
import { EditNameQuesBankComponent } from './component/edit-name-ques-bank/edit-name-ques-bank.component';
import { DeleteBankComponent } from './component/delete-bank/delete-bank.component';
import { AddNewQuestionBankComponent } from './component/add-new-question-bank/add-new-question-bank.component';
import { DeleteQuestionFromQuestionBankComponent } from './component/delete-question-from-question-bank/delete-question-from-question-bank.component';
import { EditQuestionOrChoiceComponent } from './component/edit-question-or-choice/edit-question-or-choice.component';
import { EditAnswerKeyComponent } from './component/edit-answer-key/edit-answer-key.component';
import { EditQuestionComponent } from './component/edit-question/edit-question.component';
import { EditChoice1Component } from './component/edit-choice1/edit-choice1.component';
import { EditChoice2Component } from './component/edit-choice2/edit-choice2.component';
import { EditChoice3Component } from './component/edit-choice3/edit-choice3.component';
import { EditChoice4Component } from './component/edit-choice4/edit-choice4.component';
import { ViewQuestionPaperComponent } from './component/view-question-paper/view-question-paper.component';
import { AddQuestionPaperComponent } from './component/add-question-paper/add-question-paper.component';
import { AddQuestionsToQuestionPaperComponent } from './component/add-questions-to-question-paper/add-questions-to-question-paper.component';
import { QuestionsAddedToQuestionPaperComponent } from './component/questions-added-to-question-paper/questions-added-to-question-paper.component';
import { ViewQuestionsInAParticularQuestionPaperComponent } from './component/view-questions-in-a-particular-question-paper/view-questions-in-a-particular-question-paper.component';

const route: Array<Route>=[
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'quebank',
    component: QuebankComponent
  },
  {
    path: 'quebank/add-question-bank',
    component: AddNewQuestionBankComponent
  },
  {
    path: 'quebank/:bankclick',
    component: ViewquestionsComponent
  },
  {
    path: 'quebank/edit-bank-name/:bankclick',
    component: EditNameQuesBankComponent
  },
  {
    path: 'quebank/delete-bank/:bankclick/:bankid',
    component: DeleteBankComponent
  },
  {
    path: 'quebank/delete-question/:bankclick',
    component: DeleteQuestionFromQuestionBankComponent
  },
  {
    path: 'quebank/edit-question-choice/:bankclick/:ok',
    component: EditQuestionOrChoiceComponent
  },
  {
    path: 'quebank/edit-answer-key/:bankclick/:ok',
    component: EditAnswerKeyComponent
  },
  {
    path: 'quebank/edit-question/:quesid',
    component: EditQuestionComponent
  },
  {
    path: 'quebank/edit-question/choice1/:quesid',
    component: EditChoice1Component
  },
  {
    path: 'quebank/edit-question/choice2/:quesid',
    component: EditChoice2Component
  },
  {
    path: 'quebank/edit-question/choice3/:quesid',
    component: EditChoice3Component
  },
  {
    path: 'quebank/edit-question/choice4/:quesid',
    component: EditChoice4Component
  },
  {
    path: 'quebank/add-new-question/bank',
    component: AddNewQuestionComponent
  },
  {
    path: 'questionpaper',
    component: ViewQuestionPaperComponent
  },
  {
    path: 'addquestionpaper',
    component: AddQuestionPaperComponent
  },
  {
    path: 'addquestionpaper/:quespapername',
    component: AddQuestionsToQuestionPaperComponent
  },
  {
    path: 'addquestionpaper/questionadded/:quespapername',
    component: QuestionsAddedToQuestionPaperComponent
  },
  {
    path: 'addquestionpaper/questionpaper/view-questions-in-a-particular-question-paper/:quespapername',
    component: ViewQuestionsInAParticularQuestionPaperComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    HeaderComponent,
    QuebankComponent,
    QuebankafterclickComponent,
    ViewquestionsComponent,
    AddNewQuestionComponent,
    EditNameQuesBankComponent,
    DeleteBankComponent,
    AddNewQuestionBankComponent,
    DeleteQuestionFromQuestionBankComponent,
    EditQuestionOrChoiceComponent,
    EditAnswerKeyComponent,
    EditQuestionComponent,
    EditChoice1Component,
    EditChoice2Component,
    EditChoice3Component,
    EditChoice4Component,
    ViewQuestionPaperComponent,
    AddQuestionPaperComponent,
    AddQuestionsToQuestionPaperComponent,
    QuestionsAddedToQuestionPaperComponent,
    ViewQuestionsInAParticularQuestionPaperComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(route),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
