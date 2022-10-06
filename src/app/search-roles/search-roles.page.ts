import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-roles',
  templateUrl: './search-roles.page.html',
  styleUrls: ['./search-roles.page.scss'],
})
export class SearchRolesPage implements OnInit {
  public positions = [
    {
      role: 'Team Lead',
      experience: '2 Years',
      location: 'Redlands',
    },
    {
      role: 'Readiness Lead',
      experience: '2 Years',
      location: 'Redlands',
    },
    {
      role: 'Product Advocacy Lead',
      experience: '2 Years',
      location: 'Redlands',
    },
    {
      role: 'Technical Account Manager',
      experience: '2 Years',
      location: 'Redlands',
    },
    {
      role: 'Group Lead',
      experience: '2 Years',
      location: 'Redlands',
    },
    {
      role: 'Unit Manager',
      experience: '4 Years',
      location: 'Redlands',
    },
    {
      role: 'Unit Manager',
      experience: '4 Years',
      location: 'Charlotte',
    },
  ];
  public results = [...this.positions];
  constructor(private router: Router) {}

  handleChange(event) {
    const query = event.target.value.toLowerCase();
    this.results = this.positions.filter(
      (d) =>
        d.role.toLowerCase().indexOf(query) > -1 ||
        d.experience.toLowerCase().indexOf(query) > -1 ||
        d.location.toLowerCase().indexOf(query) > -1
    );
  }

  ngOnInit() {}
  goBack() {
    this.router.navigate(['/home']);
  }
}
