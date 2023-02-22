import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-support',
  templateUrl: './support.page.html',
  styleUrls: ['./support.page.scss'],
})
export class SupportPage implements OnInit {
  isModalOpen = false;
  modalTmp = {
    role: ``,
    description: ``,
    skills: '',
    desires: ``,
    experiences: '',
    prototypical: '',
    opportunities: '',
    surprises: '',
  };

  public supportRoles = [
    {
      role: `Group Lead`,
      // eslint-disable-next-line max-len
      description: `Group Leads are vital to our organization and our customer’s success as they develop and engage teams that support our customers in being successful with Esri software. They frequently partner with other roles in the organization to make programs such as Readiness and Premium Support Program successful. Group leads also help with strategic efforts by providing their feedback on workflows and processes and by occasionally leading those efforts.\n\n The role is primarily supervisory however it has opportunities for staying technically up-to-date with high-level information through release bulletins and other case management tasks.`,
      skills: [
        'Organization skills',
        'Time Management',
        'Selfless/Team first Mindset',
        'Analytics/Critical Thinking',
        'Patience/Resilience',
      ],
      desires: ``,
      experiences: '',
      prototypical: '',
      opportunities: '',
      surprises: '',
    },
    {
      role: `Product Advocacy Lead`,
      // eslint-disable-next-line max-len
      description: `Product Advocacy Leads are vital to our organization and our customer’s success as they develop and engage teams that support our customers in being successful with Esri software. They frequently partner with other roles in the organization to make programs such as Readiness and Premium Support Program successful. Group leads also help with strategic efforts by providing their feedback on workflows and processes and by occasionally leading those efforts.\n\n The role is primarily supervisory however it has opportunities for staying technically up-to-date with high-level information through release bulletins and other case management tasks.`,
      skills: [
        'Organization skills',
        'Time Management',
        'Selfless/Team first Mindset',
        'Analytics/Critical Thinking',
        'Patience/Resilience',
      ],
      desires: ``,
      experiences: '',
      prototypical: '',
      opportunities: '',
      surprises: '',
    },
    {
      role: `Tech Lead`,
      // eslint-disable-next-line max-len
      description: `Technology Leads (TLs) are an integral part of the Product Supportability team in Esri Support Services. With a focus on product expertise and technical leadership, they work as part of the team to resolve the most challenging customer issues and help ensure analysts have the tools and resources they need to make our customers successful.`,
      skills: [
        'Organization skills',
        'Time Management',
        'Selfless/Team first Mindset',
        'Analytics/Critical Thinking',
        'Patience/Resilience',
      ],
      desires: ``,
      experiences: '',
      prototypical: '',
      opportunities: '',
      surprises: '',
    },
    {
      role: `Technical Account Manager`,
      // eslint-disable-next-line max-len
      description: `Technical Account Management (TAM’s) are integral to our organization and our customer’s success as they ensure our Premium Support program is maintained and customers gather value from it. They also serve as escalation managers for issues that can sprawl company wide. To this end they help ensure our high value customers are receiving the technical support and attention they require.\n\nIt is not possible to over-stress how important communication skills are to this role. This involves speaking up, ensuring you’re on the same page with your team, analysts, Group Leads, and ultimately the customer to drive their success.`,
      skills: [
        'Organization skills',
        'Time Management',
        'Selfless/Team first Mindset',
        'Analytics/Critical Thinking',
        'Patience/Resilience',
      ],
      desires: ``,
      experiences: '',
      prototypical: '',
      opportunities: '',
      surprises: '',
    },
  ];

  constructor(private router: Router) {}

  goBack() {
    this.router.navigate(['/home']);
  }

  setOpen(isOpen: boolean, tmp) {
    this.isModalOpen = isOpen;
    this.modalTmp = tmp;
  }
  ngOnInit() {}
}
