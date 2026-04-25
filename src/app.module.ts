import { NgModule, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { AppComponent } from './app/app.component';
import { BrowserModule } from '@angular/platform-browser';
import { CardComponent } from './app/components/playground/card/card.component';
import { PlaygroundComponent } from './app/components/playground/playground.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodoListComponent } from './app/components/todo-list/todo-list.component';
import { HeaderComponent } from './app/components/header/header.component';
import { FooterComponent } from './app/components/footer/footer.component';
import { TodoListItemComponent } from './app/components/todo-list/todo-list-item/todo-list-item.component';
import { InputOutputComponent } from './app/components/playground/input-output/input-output.component';
import { ParentComponent } from './app/components/playground/input-output/parent/parent.component';
import { ChaildComponent } from './app/components/playground/input-output/chaild/chaild.component';
import { DirectiveComponent } from './app/components/playground/directive/directive.component';
import { HilightDirective } from './app/directives/hilight.directive';
import { PipeComponent } from './app/components/playground/pipe/pipe.component';
import { PipePipe } from './app/pipe/turncate.pipe';
import { PreviewCounterComponent } from './app/components/playground/preview-counter/preview-counter.component';
import { CounterComponent } from './app/components/playground/counter/counter.component';
import { RxjsComponent } from './app/components/playground/rxjs/rxjs.component';
import { FirstComponent } from './app/components/playground/first/first.component';
import { SecondComponent } from './app/components/playground/second/second.component';
import { ThirdComponent } from './app/components/playground/third/third.component';
import { LifeCycleComponent } from './app/components/playground/life-cycle/life-cycle.component';
import { TodoFormComponent } from './app/components/todo-form/todo-form.component';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import {  ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    PlaygroundComponent,
    TodoListComponent,
    HeaderComponent,
    FooterComponent,
    TodoListItemComponent,
    InputOutputComponent,
    ParentComponent,
    ChaildComponent,
    DirectiveComponent,
    HilightDirective,
    PipeComponent,
    PipePipe,
    PreviewCounterComponent,
    CounterComponent,
    RxjsComponent,
    FirstComponent,
    SecondComponent,
    ThirdComponent,
    LifeCycleComponent,
    TodoFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-bottom-right',
    }),
  ReactiveFormsModule, 
  ],
  exports: [CardComponent],
  bootstrap: [AppComponent],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }) 
  ],
})
export class AppModule {}
