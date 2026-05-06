import {
  NgModule,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection,
} from '@angular/core';
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
import { ToastrModule } from 'ngx-toastr';
import { RoutingComponent } from './app/components/playground/routing/routing.component';
import { Page1Component } from './app/components/playground/routing/page1/page1.component';
import { Page2Component } from './app/components/playground/routing/page2/page2.component';
import { Page3Component } from './app/components/playground/routing/page3/page3.component';
import { Route, RouterModule } from '@angular/router';
import { authGuard } from './app/guards/auth.guard';
import { Child1Component } from './app/components/playground/routing/page3/child1/child1.component';
import { Child2Component } from './app/components/playground/routing/page3/child2/child2.component';
import { NotFoundComponent } from './app/components/playground/routing/not-found/not-found.component';

const routes: Route[] = [

  {
    path: '',
    redirectTo: 'page1',
    pathMatch: 'full',
  },
  {
    path: 'page1',
    component: Page1Component,
  },
  {
    path: 'page2/:msg',
    component: Page2Component,
  },
  {
    path: 'page3',
    component: Page3Component,
    canActivate: [authGuard],
    children: [
      {
        path: '',
        redirectTo: 'child1',
        pathMatch: 'full',
      },
      {
        path: 'child1',
        component: Child1Component,
      },
      {
        path: 'child2',
        component: Child2Component,
      },
      {
        path: '**',
        component: NotFoundComponent
      },
    ],
  },
  {
        path: '**',
        component: NotFoundComponent
  },
];
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
    RoutingComponent,
    Page1Component,
    Page2Component,
    Page3Component,
    Child1Component,
    Child2Component,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-bottom-right',
    }),
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
  ],
  exports: [CardComponent],
  bootstrap: [AppComponent],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
  ],
})
export class AppModule { }
