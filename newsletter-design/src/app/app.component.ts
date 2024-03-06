import {Component} from '@angular/core';

function isValidEmail(email: string) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'newsletter-design';
  errorMessage = ""
  emailInput = "";
  success = false;

  onSubmit(): void {
    if (this.emailInput == null || this.emailInput == "") {
      this.errorMessage = "email cannot be empty";
    } else if (isValidEmail(this.emailInput)) {
      this.errorMessage = "";
      this.success = true;
    } else {
      this.errorMessage = "email must be valid";
    }
  }

  onKey(event: any) {
      this.emailInput = event.target.value;
  }

  onDismiss() {
    this.success=false;
  }
}


