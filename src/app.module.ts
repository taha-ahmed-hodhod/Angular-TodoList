import {
  NgModule,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection,
} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from './app/app.component';
import { FooterComponent } from './app/components/footer/footer.component';
import { HeaderComponent } from './app/components/header/header.component';
import { TodoFormComponent } from './app/components/todo-form/todo-form.component';
import { TodoListItemComponent } from './app/components/todo-list/todo-list-item/todo-list-item.component';
import { TodoListComponent } from './app/components/todo-list/todo-list.component';
import { Route, RouterModule } from '@angular/router';

const routes : Route[] = [
  {
    path: 'playground',
    loadChildren: () => import('./app/components/playground/playground.module').then(m => m.PlaygroundModule),
  }
]

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    HeaderComponent,
    FooterComponent,
    TodoListItemComponent,
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
    RouterModule.forRoot(routes)
  ],
  exports: [],
  bootstrap: [AppComponent],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
  ],
})
export class AppModule { }
