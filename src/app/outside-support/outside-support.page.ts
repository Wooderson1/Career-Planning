import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-outside-support',
  templateUrl: './outside-support.page.html',
  styleUrls: ['./outside-support.page.scss'],
})
export class OutsideSupportPage implements OnInit {
  constructor(private router: Router) {}

  goBack() {
    this.router.navigate(['/home']);
  }
  ngOnInit() {}
}
