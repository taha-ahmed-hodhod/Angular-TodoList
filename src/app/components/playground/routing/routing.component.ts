import { Component, inject } from '@angular/core';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-routing',
  standalone: false,
  templateUrl: './routing.component.html',
  styleUrl: './routing.component.css',
})
export class RoutingComponent {
  authService = inject(AuthService) 
}
