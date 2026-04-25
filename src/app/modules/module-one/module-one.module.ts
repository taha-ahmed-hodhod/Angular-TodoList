import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterServices } from '../../services/counter.service';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [TestComponent],
  imports: [CommonModule],
  providers: [CounterServices],
})
export class ModuleOneModule {}
