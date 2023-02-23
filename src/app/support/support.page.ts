import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {
  constructor(private domSanitizer: DomSanitizer) {}
  transform(url) {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
  }
}

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
    skills: [],
    desires: [],
    aspires: [],
    iAm: [],
    experiences: [],
    prototypical: [],
    opportunities: [],
    surprises: [],
    url: '',
    image: '',
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
      desires: [
        'Help Others',
        'Drive Improvements in workflows and processes',
        'Contribute to consistent and clear communication',
        'Help in career development of other individuals',
        'Create a self-managed and self-motivated team',
      ],
      aspires: [
        'Help Others',
        'Make a difference',
        'Be customer focused',
        'Be a good leader',
        'Be an Esri Representative',
      ],
      iAm: [
        'Determined/tenacious',
        'Resourceful',
        'Approachable',
        'Open minded/flexible',
        'Detail oriented',
        'Self-motivated',
        'Helpful',
        'Thoughtful',
      ],
      experiences: [
        'Crucial Conversations',
        '7 Habits of highly Effective People',
        'Situational self-leadership',
        '5 Choices to Extraordinary Productivity',
        'Crucial Accountability',
        'Leadership Essentials',
        'Slide-ology/Resonate',
      ],
      prototypical: [
        `Analyst/Specialist – Ability to multi-task while
          working on several cases, prioritize work while
          handling crucial cases and managing difficult
          situations with customers translates well to the`,
        `TAMs – Exposure to different situations with
          customers and working with different people
          within and outside Support Services provide a
          well-rounded background for the role.`,
        ` Tech Leads/Readiness Lead/Advocacy Lead – Any
          type of lead role within the organization gives
          exposure to leadership skills and critical
          thinking.`,
      ],
      opportunities: [
        'Product Engineer - Julia Lenhardt',
        'Unit Manager - Dustin Hobbs',
        'Professional Services - Abhijit Mane',
        'Technical Lead = Henry Ho',
      ],
      surprises: [
        `“It is almost impossible to be successful in the
          role without having or developing effective time
          management skills.”`,
        `“I didn’t realize that GLs are so involved in
            case and queue management”`,
        `“I was surprised by the amount of multi-tasking
            and prioritization needed on daily basis”`,
      ],
      url: 'https://www.youtube.com/embed/SSM9fhISYLU',
      image: '',
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
      desires: [
        'Help Others',
        'Drive Improvements in workflows and processes',
        'Contribute to consistent and clear communication',
        'Help in career development of other individuals',
        'Create a self-managed and self-motivated team',
      ],
      aspires: [
        'Help Others',
        'Make a difference',
        'Be customer focused',
        'Be a good leader',
        'Be an Esri Representative',
      ],
      iAm: [
        'Determined/tenacious',
        'Resourceful',
        'Approachable',
        'Open minded/flexible',
        'Detail oriented',
        'Self-motivated',
        'Helpful',
        'Thoughtful',
      ],
      experiences: [
        'Crucial Conversations',
        '7 Habits of highly Effective People',
        'Situational self-leadership',
        '5 Choices to Extraordinary Productivity',
        'Crucial Accountability',
        'Leadership Essentials',
        'Slide-ology/Resonate',
      ],
      prototypical: [
        `Analyst/Specialist – Ability to multi-task while
          working on several cases, prioritize work while
          handling crucial cases and managing difficult
          situations with customers translates well to the`,
        `TAMs – Exposure to different situations with
          customers and working with different people
          within and outside Support Services provide a
          well-rounded background for the role.`,
        ` Tech Leads/Readiness Lead/Advocacy Lead – Any
          type of lead role within the organization gives
          exposure to leadership skills and critical
          thinking.`,
      ],
      opportunities: [
        'Product Engineer - Julia Lenhardt',
        'Unit Manager - Dustin Hobbs',
        'Professional Services - Abhijit Mane',
        'Technical Lead = Henry Ho',
      ],
      surprises: [
        `“It is almost impossible to be successful in the
          role without having or developing effective time
          management skills.”`,
        `“I didn’t realize that GLs are so involved in
            case and queue management”`,
        `“I was surprised by the amount of multi-tasking
            and prioritization needed on daily basis”`,
      ],
      url: '',
      image: '',
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
      url: '',
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
      url: '',
      image: '',
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
