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
      image: 'assets/images/blue.jpg',
    },
    {
      role: `Technical Account Manager`,
      // eslint-disable-next-line max-len
      description: `Technical Account Management (TAM’s) are integral to our organization and our customer’s success as they ensure our Premium Support program is maintained and customers gather value from it. They also serve as escalation managers for issues that can sprawl company wide. To this end they help ensure our high value customers are receiving the technical support and attention they require.\n\nIt is not possible to over-stress how important communication skills are to this role. This involves speaking up, ensuring you’re on the same page with your team, analysts, Group Leads, and ultimately the customer to drive their success.`,
      skills: [
        'Customer Experience',
        'Leadership',
        'Listening',
        'Action Oriented',
      ],
      desires: [
        'Understanding first-hand how patterns of use are put into practice',
        'Improve quality of our software',
        'Drive resolutions to increase customer productivity',
        'Be helpful and see others succeed as a fruit of my labor',
        'Tell meaningful stories on customer product usage to drive action',
        'Be a representative for all of Esri',
      ],
      aspires: [
        'Improve Esri software for users within my industry',
        'Move Esri customers ahead in their work to solve world problems',
        'Make a difference',
        'Advocate for our customers',
        'Help others/ make people successful',
        'Provide the best customer experience possible',
        'Grow my Esri knowledge (i.e. how Esri customers use ArcGIS, how Esri builds software, how Esri does business, etc.)',
      ],
      iAm: [
        'Self-driven ',
        'Determined/ tenacious ',
        'Resourceful',
        'Approachable',
        'Interested',
        'Perceptive',
        'Open Minded ',
        'Detail oriented',
      ],
      experiences: [
        'Self-Leadership',
        'Crucial Conversations',
        '7 Habits of highly Effective People',
      ],
      prototypical: [
        `Technology Analyst – Technical expertise and PSS customer experience translate well to the role.`,
        `Specialist – Deep technical expertise enables ability to understanding customer usage patterns. `,
        `NORUS – Analysts generally demonstrate strong ability to understand the platform story to apply within their industry`,
        `*All candidates that meet minimum requirements are encouraged to explore and apply for the TAM role.`,
      ],
      opportunities: [
        'Technical Advisor – George Thompson',
        'Project Management – Matt Monson',
        'Program Management – Scott Whittington',
        'Training Sales Consultant – Phillip Waldron',
      ],
      surprises: [
        `“I was surprised about how much Networking there was in the TAM role both internally, and externally. 
        Internally, there is consistent collaboration with Solution Engineers, Product Engineers, 
        Product and Program Managers, Account Managers, Tech Advisors, Training Sales Representatives… 
        the list goes on and on. 
        Externally, you engage with the same spectrum, from analysts deep in the GIS weeds 
        to their Information Officers at the executive levels. 
        All this to ensure that our customers are successful in using our software.” `,
        `“The depth and breadth of Esri personnel involved in supporting our customers is astonishing.  
        As a TAM, you effectively become a member of multiple teams and collaborate and support each one in a unique way.” `,
        `“The stress [associated with the TAM role] is lower than many assume. 
         Building trusting relationships with customers leads to professional discussions focused on the business solutions, 
        impacts, impediments, and recommendations for a path forward, generally removing high emotion that is often a stressful 
        component of being an analyst on a case.”`,
      ],
      url: '',
      image: 'assets/images/collab.jpg',
    },
    {
      role: `Readiness Lead`,
      // eslint-disable-next-line max-len
      description: `Readiness Leads are often visible on Chatter, in the classroom, and walking the floor preparing others to provide Esri customers with the best possible support experience. 
      Readiness Leads maintain expert knowledge on our core products and support systems, which paired with their leadership skills, 
      allow us to build creative, engaging, and innovative experiences for analysts, leads, 
      and managers so that they can connect with customers on each interaction and resolve issues effectively.`,
      skills: [
        'Creativity and Innovation',
        'Storytelling and Communication ',
        'Strategic Thinking and Planning',
        'Leadership',
        'Collaboration',
        'Ability to mentor others',
        'Project management minded',
        'Action Oriented',
      ],
      desires: [
        'Improve the learning experience',
        'Be helpful and see others succeed as a fruit of my labor',
        'Mentor and grow others',
        'Tell meaningful stories',
        'Share and transfer knowledge',
        'Be a technology owner and leader for Technical Support',
        'Building networks and relationships with all Esri',
      ],
      aspires: [
        'Improve the Technical Support experience for Esri customers ',
        'Help others find confidence and become knowledgeable of Esri software ',
        'Make a difference through helping others succeed ',
        'Identify areas for innovation and practice creativity ',
        'Grow my Esri knowledge (i.e. how Esri customers use ArcGIS, how Esri builds software, how Esri does business, etc.) ',
      ],
      iAm: [
        'Imaginative and Inventive ',
        'Constructive and Industrious  ',
        'Passionate and Energetic ',
        'Thorough and Focused ',
        'Team-minded and Collaborative ',
        'Resourceful and Adaptable ',
      ],
      // experiences: [
      //   'Crucial Conversations',
      //   '7 Habits of highly Effective People',
      //   'Situational self-leadership',
      //   '5 Choices to Extraordinary Productivity',
      //   'Crucial Accountability',
      //   'Leadership Essentials',
      //   'Slide-ology/Resonate',
      // ],
      prototypical: [
        `Tech Lead – Technical expertise and leadership abilities translate well to the role.`,
        `Technology Analyst or Specialist – Technical expertise enables ability to translate challenging technical details. `,
        `Group Lead – Potential to apply knowledge on staff development and use technical background to engage learners. `,
        `*All candidates that meet minimum requirements are encouraged to explore and apply for the RL role.`,
      ],
      opportunities: [
        'Product Engineer',
        'Solution Engineer',
        'Product Engineer – Noah Sager',
        'Technical Account Manager – Todd Stuber',
        'Program Manager',
        'Instructor',
      ],
      surprises: [
        `“Readiness is about being creative and innovative, the Readiness team is constantly bouncing ideas of each other.
         It's great to have a team that I can call just about any time that I know will be honest and 
         constructive so that we can all move forward. 
         I feel like we all have a common goal and realize that we can get there fastest as a team.” `,
        `“I find it interesting how training approaches have changed in the last few years to deal with the increasing complexity 
        of our products. We’ve had to become more creative and try new methods of knowledge delivery to help analysts apply their 
        conceptual knowledge across the platform.”`,
      ],
      url: 'https://www.youtube.com/embed/SSM9fhISYLU',
      image: '',
    },
    {
      role: `Tech Lead`,
      // eslint-disable-next-line max-len
      description: `Technology Leads (TLs) are an integral part of the Product Supportability team in Esri Support Services. With a focus on product expertise and technical leadership, they work as part of the team to resolve the most challenging customer issues and help ensure analysts have the tools and resources they need to make our customers successful.`,
      skills: [
        'Leadership',
        'Collaboration',
        'Listening',
        'Analytics/Critical Thinking',
        'Fact finding/ Research ',
        'Action Oriented ',
      ],
      desires: [
        'Learn',
        'Improve quality and efficiency',
        'Solve problems/ find the root cause of an issue',
        'Provide the best outcome or solution possible',
        'Be helpful and see others succeed as a fruit of my labor',
        'Share and transfer knowledge ',
        'Take technical ownership of a product or technology for all of Esri',
        'Be a representative for all of Esri ',
      ],
      aspires: [
        'Help others/ make people successful ',
        'Build a strong network of technical experts ',
        'Find and correct inefficient Support workflows ',
        'Provide the best customer experience possible',
        'Grow my Esri knowledge (i.e. how Esri customers use ArcGIS, how Esri builds software, how Esri does business, etc.)',
      ],
      iAm: [
        'Self-driven ',
        'Resourceful/ creative ',
        'Approachable/ willing ',
        'Inquisitive/ curious/ interested',
        'Tactful/ aware',
        'Considerate/ perceptive',
        'Open minded/ flexible',
        'Detail oriented',
      ],
      experiences: [
        'Legendary Service',
        'Crucial Conversations',
        '7 Habits of highly Effective People',
      ],
      prototypical: [
        `Technology – Technical expertise enables ability to identify important trends/ themes.`,
        `Specialist – Deep technical expertise enables ability to identify important trends/ themes.`,
        `NORUS – Analysts generally demonstrate strong ability to collaborate and approach platform issues with ease.`,
        `*All candidates that meet minimum requirements are encouraged to explore and apply for the TL role.`,
      ],
      opportunities: [
        'Software Security Engineer – Pete Buwembo, Randall Williams',
        'Product Engineer – Melissa Jarman, Artemis Fili',
        'Developer – Kwasi Asante',
        'Program Manager – Stephanie Wendel',
      ],
      surprises: [
        `“When I took on the Technology Lead role, I was surprised by how much we are involved with different departments within Esri.
         We build relationships all over the company so it’s awesome to represent Support Services to different departments and teams!” `,
        `“I was mostly surprised by the varying types of interactions that Tech Leads have. 
        As a Tech Lead, I’ve had to work with Support, Product Development, Product Management, Product Localization, Patterns & Practices, 
        Professional Services, Productization and more! Each and every day presents an opportunity to tackle a different task 
        or challenge with one of these company divisions. This keeps things rewarding, fun and interesting!” `,
      ],
      url: '',
      image: 'assets/images/purple.jpg',
    },
    {
      role: `Specialist`,
      // eslint-disable-next-line max-len
      description: `The Specialist Role allows the analyst to dive deeper into a technology and learn more advanced workflows.  The various specialists include Desktop Analytics, Enterprise, Geodata, and SDK. `,
      skills: [
        'Written Communication ',
        'Patience',
        'Time Management/Priority Setting',
        'Action Oriented ',
        'Integrity and Trust',
        'Approachability',
      ],
      desires: [
        'Share and transfer knowledge',
        'Solve problems',
        'Be helpful / Help others succeed',
      ],
      aspires: [
        'Make an impact ',
        'Help others ',
        'Help Esri customers achieve their goals ',
      ],
      iAm: [
        'Resourceful/ creative ',
        'Approachable/ willing ',
        'Inquisitive/ curious/ interested',
        'Responsive',
        'Considerate/ perceptive',
        'Open minded/ flexible',
        'Detail oriented',
        'Empathetic',
      ],
      experiences: [
        'Legendary Service',
        'Crucial Conversations',
        '7 Habits of highly Effective People',
        'Presentation Advantage ',
      ],
      prototypical: [
        `ArcGIS Analyst – Potential to apply broad knowledge to platform discussions and bring fresh 
        understanding of customer insights to the role.`,
        `NORUS – Analysts generally demonstrate strong ability to collaborate and approach platform issues with ease.`,
      ],
      opportunities: [
        'Product Engineer – Andy Shoemaker ',
        'Technical Lead – Katie Cullen ',
        'Solutions Engineer – Matt Thomas ',
        'Technical Advisor – Thomas Edghill ',
        'Professional Services – Julia Guard',
      ],
      surprises: [
        `“I think what surprised me the most about the role of Specialist was how quickly I would learn new things. 
         I feel like I am learning things every day in this role and getting in there and working with them immediately.”`,
        `“The wide range of advanced products and workflows that every Specialist needs to support.” `,
        `“What surprised me the most was in the time it took to resolve a specialist technology case as 
        it involves reaching out to development directly.Tech Leads may not have the knowledge to support the specialist
         so waiting on developments response and coordinating with them is critical.”  `,
      ],
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
