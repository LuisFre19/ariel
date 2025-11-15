import { ChangeDetectionStrategy, Component, output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  login = output<void>();

  onLoginClick(): void {
    this.login.emit();
  }
}
