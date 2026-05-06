import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { PlaygroundComponent } from './playground.component';
import { InputOutputComponent } from './input-output/input-output.component';
import { ParentComponent } from './input-output/parent/parent.component';
import { ChaildComponent } from './input-output/chaild/chaild.component';
import { DirectiveComponent } from './directive/directive.component';
import { PipeComponent } from './pipe/pipe.component';
import { HilightDirective } from '../../directives/hilight.directive';
import { PipePipe } from '../../pipe/turncate.pipe';
import { PreviewCounterComponent } from './preview-counter/preview-counter.component';
import { CounterComponent } from './counter/counter.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';
import { RoutingComponent } from './routing/routing.component';
import { Page1Component } from './routing/page1/page1.component';
import { Page2Component } from './routing/page2/page2.component';
import { Page3Component } from './routing/page3/page3.component';
import { Child1Component } from './routing/page3/child1/child1.component';
import { Child2Component } from './routing/page3/child2/child2.component';
import { NotFoundComponent } from './routing/not-found/not-found.component';
import { Route, RouterModule, RouterOutlet } from '@angular/router';
import { authGuard } from '../../guards/auth.guard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from '../../app.component';
import { AppModule } from '../../../app.module';
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
    CardComponent,
    PlaygroundComponent,
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
    RoutingComponent,
    Page1Component,
    Page2Component,
    Page3Component,
    Child1Component,
    Child2Component,
    NotFoundComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    RouterOutlet,
    
  ],
})
export class PlaygroundModule { }
