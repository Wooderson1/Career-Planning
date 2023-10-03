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
  // Variable to control opening and closing the modal
  isModalOpen = false;

  // Temporary modal object
  modalTmp = {
    role: ``,
    description: ``,
    department: '',
    responsibilities: [],
    requirements: [],
    recommendedQualifications: [],
    /*                MODAL Information Below               */
    // What Skills have you learned as an analyst that have contributed to success in this role?
    skills: [],
    // What new skills have you learned in this role?
    newSkills: [],
    // What training, experiences, and/or responsibilities can analysts complete to prepare for this rile in their current position
    experiences: [],
    // What are the primary responsibilities in this role?
    primaryResponsibilities: [],
    // What are other responsibilities (secondary) are required in the role?
    secondaryResponsibilities: [],
    // What surprised you when you took on the role?
    surprises: [],
    // URL if a video for the role exists
    url: '',
    // Image location for an image if there is no video
    image: '',
  };

  public supportRoles = [
    {
      role: `Group Lead`,
      description: `Group Leads are vital to our organization and our customer’s success as they develop 
      and engage teams that support our customers in being successful with Esri software. They frequently 
      partner with other roles in the organization to make programs such as Readiness and Premium Support 
      Program successful. Group leads also help with strategic efforts by providing their feedback on workflows 
      and processes and by occasionally leading those efforts.\n\n The role is primarily supervisory however 
      it has opportunities for staying technically up-to-date with high-level information through release bulletins 
      and other case management tasks.`,
      department: 'Educational Services - Support Services',
      responsibilities: [
        `Coach, mentor, and connect with direct reports to foster a positive and trusting environment 
        that supports innovation and employee engagement.`,
        `Promote a diverse and inclusive environment for your team and stakeholders through a culture 
        of empathy, respect, and collaboration`,
        `Supervise the day-to-day activities of Support Services Analysts.`,
        `Ensure that policies and procedures are maintained`,
        `Lead performance management through active coaching, one-on-one check-ins, performance evaluations, 
        and develop personal coaching plans for team members based on Support Services KPIs `,
        `Supervise the unit dispatch queues and the management of escalated cases`,
        `Participate in the recruiting process and manage the onboarding and off boarding of team members`,
      ],
      requirements: [],
      recommendedQualifications: [],
      /*                MODAL Information Below               */
      skills: [
        'Skills working with people.',
        'Modeling the right behavior by establishing trust.',
        'Building trust by being responsible.',
        'Getting familiar with the technology.',
        'Transparency.',
        'Setting expectations and networking.',
      ],
      newSkills: ['Being objective.', 'Conflict resolution.'],
      experiences: [
        'The power of silence.',
        'Asking a ton of questions and be true to what you want to be in the role.',
      ],
      primaryResponsibilities: [
        'Ensuring that analysts have all the necessary resources and support to successfully carry out their tasks is the top priority.',
        `Maintaining transparency and providing feedback to the team is vital.
        This includes relaying important updates, setting clear expectations,
        and handling paperwork efficiently, such as mid-year reviews.`,
        'Prioritize the growth of analysts.',
        `Overall, the focus of being a group lead revolves around providing analysts with everything they need, fostering 
        transparency and feedback, and ensuring their growth and development in their professional journey.`,
      ],
      secondaryResponsibilities: [
        `Interacting with Technical Account Managers, working closely with them is essential for taking care of our 
         customers and ensuring that both the analysts and the team are well-informed about ongoing developments.`,
        `Everyday operational aspects, such as time sheet management, running numbers, conducting case assessments,
         and handling day-to-day operational tasks.`,
        'Leading group lead meetings',
        'Part of the taskforce for the interview process.',
      ],
      surprised: [],
      url: 'https://www.youtube.com/embed/SSM9fhISYLU',
      image: '',
    },
    {
      role: `Product Advocacy Lead`,
      description: `Product Advocacy Leads are vital to our organization and our customer’s success as they develop
       and engage teams that support our customers in being successful with Esri software. They frequently partner
        with other roles in the organization to make programs such as Readiness and Premium Support Program successful. 
        Group leads also help with strategic efforts by providing their feedback on workflows and processes and by occasionally 
        leading those efforts.\n\n The role is primarily supervisory however it has opportunities for staying technically up-to-date 
        with high-level information through release bulletins and other case management tasks.`,
      department: '',
      responsibilities: [],
      requirements: [],
      recommendedQualifications: [],
      /*                MODAL Information Below               */
      skills: [],
      newSkills: [],
      experiences: [],
      primaryResponsibilities: [],
      secondaryResponsibilities: [],
      surprised: [],
      url: '',
      image: 'assets/images/blue.jpg',
    },
    {
      role: `Technical Account Manager`,
      description: `Technical Account Management (TAM’s) are integral to our organization and our customer’s success as they ensure 
      our Premium Support program is maintained and customers gather value from it. They also serve as escalation managers for issues 
      that can sprawl company wide. To this end they help ensure our high value customers are receiving the technical support and 
      attention they require.\n\nIt is not possible to over-stress how important communication skills are to this role. This involves
       speaking up, ensuring you’re on the same page with your team, analysts, Group Leads, and ultimately the customer to 
       drive their success.`,
      department: '',
      responsibilities: [],
      requirements: [],
      recommendedQualifications: [],
      /*                MODAL Information Below               */
      skills: [],
      newSkills: [],
      experiences: [],
      primaryResponsibilities: [],
      secondaryResponsibilities: [],
      surprised: [],
      url: '',
      image: 'assets/images/collab.jpg',
    },
    {
      role: `Readiness Lead`,
      description: `Readiness Leads are often visible on Chatter, in the classroom, and walking the floor preparing others to provide 
      Esri customers with the best possible support experience. 
      Readiness Leads maintain expert knowledge on our core products and support systems, which paired with their leadership skills, 
      allow us to build creative, engaging, and innovative experiences for analysts, leads, 
      and managers so that they can connect with customers on each interaction and resolve issues effectively.`,
      department: '',
      responsibilities: [],
      requirements: [],
      recommendedQualifications: [],
      /*                MODAL Information Below               */
      skills: [],
      newSkills: [],
      experiences: [],
      primaryResponsibilities: [],
      secondaryResponsibilities: [],
      surprised: [],
      url: 'https://www.youtube.com/embed/SSM9fhISYLU',
      image: '',
    },
    {
      role: `Tech Lead`,
      description: `Technology Leads (TLs) are an integral part of the Product Supportability team in Esri Support Services. 
      With a focus on product expertise and technical leadership, they work as part of the team to resolve the most challenging
      customer issues and help ensure analysts have the tools and resources they need to make our customers successful.`,
      skills: [],
      newSkills: [],
      experiences: [],
      primaryResponsibilities: [],
      secondaryResponsibilities: [],
      surprised: [],
      url: '',
      image: 'assets/images/purple.jpg',
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
