import { AfterViewChecked, Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'app-logout',
    templateUrl: './logout.component.html',
    styleUrl: './logout.component.css',
})

export class LogoutComponent implements AfterViewChecked{

  constructor(private router: Router){}
  ngAfterViewChecked() {
    this.router.navigateByUrl('/auth');
  }
}