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
    // What are the daily responsibilities in this role?
    dailyResponsibilities: [],
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
    /******************************************     Group Lead    *********************************************/
    {
      role: `Group Lead`,
      description: `Group Leads are vital to our organization and our customer’s success as they develop \
      and engage teams that support our customers in being successful with Esri software. They frequently \
      partner with other roles in the organization to make programs such as Readiness and Premium Support \
      Program successful. Group leads also help with strategic efforts by providing their feedback on workflows \
      and processes and by occasionally leading those efforts. The role is primarily supervisory however \
      it has opportunities for staying technically up-to-date with high-level information through release bulletins \
      and other case management tasks.`,
      department: 'Educational Services - Support Services',
      responsibilities: [
        `Coach, mentor, and connect with direct reports to foster a positive and trusting environment 
        that supports innovation and employee engagement.`,
        `Promote a diverse and inclusive environment for your team and stakeholders through a culture 
        of empathy, respect, and collaboration.`,
        `Supervise the day-to-day activities of Support Services Analysts.`,
        `Ensure that policies and procedures are maintained.`,
        `Lead performance management through active coaching, one-on-one check-ins, performance evaluations, 
        and develop personal coaching plans for team members based on Support Services KPIs.`,
        `Supervise the unit dispatch queues and the management of escalated cases.`,
        `Participate in the recruiting process and manage the onboarding and off boarding of team members.`,
      ],
      requirements: [
        `Experience in a technical role in Support Services.`,
        `Experience in mentoring and training others in a similar work environment.`,
        `A motivated individual who can work well independently and collaborate with others.`,
        `Strong attention to detail and proven ability to effectively communicate.`,
        `Demonstrated ability to organize and work on multiple concurrent projects.`,
      ],
      recommendedQualifications: [
        `Experience supervising and effectively training technical staff.`,
        `Experience working in customer service or support organizations.`,
        `Proficient in relevant supported technologies.`,
      ],
      // MODAL Information Below
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
      dailyResponsibilities: [
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
    /******************************************     Product Advocacy Lead     *********************************************/
    {
      role: `Product Advocacy Lead`,
      description: `Product Advocacy Leads are vital to our organization and our customer’s success as they develop\
       and engage teams that support our customers in being successful with Esri software. They frequently partner\
        with other roles in the organization to make programs such as Readiness and Premium Support Program successful.\
        Group leads also help with strategic efforts by providing their feedback on workflows and processes and by occasionally \
        leading those efforts.\n\n The role is primarily supervisory however it has opportunities for staying technically up-to-date \
        with high-level information through release bulletins and other case management tasks.`,
      department: '',
      responsibilities: [
        `Partner with the Product Management team from product inception to launch and operational support.`,
        `Research and present product or service-related metrics, trends, and insights at regular intervals for debriefing 
        with product management throughout the release cycle.`,
        `Facilitate change management and readiness around a product release, functional changes, or messaging.`,
        `Create multimedia content to address challenge areas for practitioners and customers using systems such as 
        My Trailhead, YouTube, Salesforce Knowledge, or ArcGIS blogs.`,
        `Connect and engage with staff and customers through formal and informal communities related to Esri and ArcGIS.`,
        `Research, document, and act upon customer feedback for products through various channels.`,
        `Champion ArcGIS throughout your network, communities, and events.`,
      ],
      requirements: [
        `Possess a bachelor’s degree in GIS, geography, environmental science, computer science, management information systems, 
        or other relevant fields.`,
        `Experience in a technical role.`,
        `You know ArcGIS products and how they fit together to enable location intelligence.`,
        `Ability to forge new relationships and navigate complicated situations to maintain forward progress.`,
        `Be proactive and highly collaborative to identify and resolve challenges within a team-centric environment.`,
        `Carry a sincere passion for influencing and improving the quality of Esri products by contributing to their success.`,
        `Enthusiasm and motivation to learn and understand all aspects of Esri Services & Product Management.`,
        `Skill to explain important and complex concepts, processes, and tasks in understandable terms.`,
        `Demonstrable experience with effective communication, presentation, and interpersonal skills, including collaboration, 
        research, storytelling, and facilitation to influence cross-functional teams, software support, 
        or technical customer organizations`,
      ],
      recommendedQualifications: [],
      // MODAL Information Below
      skills: [],
      newSkills: [],
      experiences: [],
      dailyResponsibilities: [],
      secondaryResponsibilities: [],
      surprised: [],
      url: '',
      image: 'assets/images/blue.jpg',
    },
    /******************************************     Technical Account Manager     *********************************************/
    {
      role: `Technical Account Manager`,
      description: `Technical Account Management (TAM’s) are integral to our organization and our customer’s success as they ensure \
      our Premium Support program is maintained and customers gather value from it. They also serve as escalation managers for issues \
      that can sprawl company wide. To this end they help ensure our high value customers are receiving the technical support and \
      attention they require.\n\nIt is not possible to over-stress how important communication skills are to this role. This involves\
       speaking up, ensuring you’re on the same page with your team, analysts, Group Leads, and ultimately the customer to \
       drive their success.`,
      department: '',
      responsibilities: [
        `Utilize technical account management and problem-solving skills to isolate mission-critical issues; coordinate with various 
        groups within Esri to connect our customers with the appropriate staff.`,
        `Function as the customer facing representative for Esri’s Premium Support Program.`,
        `Develop action plans and provide ongoing customer management with the goal of expediting resolution times.`,
        `Function as technical liaison to Professional Services, Product teams, or international distributor/regional offices to 
        provide business intelligence to various groups within Esri.`,
        `Work with the escalation management team to monitor the progress of hot fix requests related to Premium Support customers, 
        business partners, and international distributors.`,
        `Function as an escalation manager for critical issues related to both Standard and Premium Support customers.`,
        `Provide Premium Support customers, business partners, and international distributors with proactive information such 
        as weekly status reports on support cases; participate in conference calls and perform on-site visits as needed.`,
        `Focus on building long lasting professional relationships with customers and be familiar with clients’ architecture, 
        infrastructure, and business goals.`,
        `Maintain a high level of technical proficiency with Esri core technology.`,
        `Leverage personal technical expertise to work collaboratively with analyst, customers, and other teams in an effort 
        to resolve technical challenges.`,
      ],
      requirements: [
        `Bachelor's or Master's degree.`,
        `Experience in a technical support or GIS role.`,
        `Superior account management skills and demonstrated professional experience providing expert-level technical support.`,
        `Ability to understand critical nature of customer cases and be their advocate within Esri support.`,
        `Demonstrate excellent presentation skills to internal and external senior management staff.`,
        `Exceptional written and verbal communication skills in high pressure situations.`,
        `Ability to multi-task and prioritize job requirements as well as strong.`,
        `Organization skills.`,
        `Ability to travel up to 25% of the time.`,
      ],
      recommendedQualifications: [
        `Minimum of two years of in-depth knowledge and experience with Esri technology to include ArcGIS Pro and ArcGIS Enterprise.`,
        `Minimum of two years of experience in customer care, customer support, or a related field.`,
        `Minimum of two years of experience with escalation and account management and working with product development, sales, 
        and professional services.`,
      ],
      // MODAL Information Below
      skills: [
        `Master's degree and a strong background in GIS.`,
        `Working with federal customers prepared me for working in the utility space, and working with regulations and
        court mandated concerns.`,
        `Being able to identify high stakes situations before things get bad.`,
        `Mastering the basics (An Advanced skill set is mastery of basic skills).`,
        `Being able to bridge the gap between the business side of things and technical detail-oriented GIS knowledge.`,
      ],
      newSkills: [
        `Negotiation tactics in to high stakes situations.`,
        `How to control your emotions when in high staked, high emotional situations.`,
        `Developing a direct relationship with customers and understanding the bigger picture of the issues that you may not 
        be exposed to as an analyst.`,
      ],
      experiences: [
        `Speaking with every team, getting the full picture. Every industry is going to be a little different.`,
        `Mastering the basics, especially communication and note taking.`,
      ],
      dailyResponsibilities: [
        `Ensuring customer success.`,
        `Case review and working with analysts to keep cases moving.`,
        `Staying available for the customers and analysts. Not over scheduling meetings to stay available. 
        Customers can hit an issue that is in production that needs immediate attention. Staying available 
        is important for sudden situations, even after regular hours.`,
      ],
      secondaryResponsibilities: [
        `Varies based on the customer.`,
        `Involvement in regulatory concerns.`,
        `Helping the customer manage their cases, and when to utilize a PSS case if they have a limited number.`,
      ],
      surprised: [
        `Slowing down the in-depth trouble shooting skills involved in the analyst role.`,
        `Letting the analysts user their own knowledge and focusing on the big picture`,
        `Working and speaking with important people in and without an organization.`,
      ],
      url: '',
      image: 'assets/images/collab.jpg',
    },
    /******************************************     Readiness Lead     *********************************************/
    {
      role: `Readiness Lead`,
      description: `Readiness Leads are often visible on Chatter, in the classroom, and walking the floor preparing others to provide \
      Esri customers with the best possible support experience. Readiness Leads maintain expert knowledge on our core products and \
      support systems, which paired with their leadership skills, allow us to build creative, engaging, and innovative experiences \
      for analysts, leads, and managers so that they can connect with customers on each interaction and resolve issues effectively.`,
      department: '',
      responsibilities: [
        `Partner with global operations leaders to align business objectives and address skill gaps through training, coaching, 
        assessments, and hands-on practice.`,
        `Design, develop, and implement training programs related to ArcGIS Extensions and emerging technologies.`,
        `Mature and codify organizational knowledge by building resources in our centralized learning systems and integrating
         them into onboarding and continuous learning plans.`,
        `Continuously evaluate the impact of training programs and identify areas of improvement for individuals, teams, and units.`,
        `Additional Support Readiness projects as required.`,
      ],
      requirements: [
        `Experience along with a bachelor’s or master’s degree in GIS, geography, environmental science, 
        computer science, management information systems, or other relevant fields.`,
        `Sincere passion and drive to be a leader within Technical Support by developing the technical and professional 
        skills of our global organization.`,
        `Proven ability to effectively communicate complex concepts, processes, and tasks to various audiences in meaningful 
        terms and gather feedback.`,
        `Exposure to or interest in instructional design and talent development.`,
      ],
      recommendedQualifications: [
        `Experience in leadership, coordination, training, or supervisory roles.`,
        `Knowledge of instructional design principles, facilitation, or project management.`,
        `Certification in Instructional Design or Facilitation.`,
      ],
      // MODAL Information Below
      skills: [],
      newSkills: [],
      experiences: [],
      dailyResponsibilities: [],
      secondaryResponsibilities: [],
      surprised: [],
      url: 'https://www.youtube.com/embed/SSM9fhISYLU',
      image: '',
    },
    /******************************************     Tech Lead     *********************************************/
    {
      role: `Tech Lead`,
      description: `Technology Leads (TLs) are an integral part of the Product Supportability team in Esri Support Services. \
      With a focus on product expertise and technical leadership, they work as part of the team to resolve the most challenging\
      customer issues and help ensure analysts have the tools and resources they need to make our customers successful.`,
      department: '',
      responsibilities: [
        `Collaborate with Analysts and TAMs to guarantee effective partnerships with strategic customers.`,
        `Engage with Product Development about cases, trends, and collaboration opportunities.`,
        `Participate in Holistic testing, usability testing, exam development, and beta support.`,
        `Triage product defects, hotfixes, and defect escalations.`,
        `Share technical Knowledge through knowledge transfers, sessions, Salesforce Knowledge Articles, and Esri Blogs.`,
        `Attend user conferences, developer summits, and other events.`,
      ],
      requirements: [
        `Bachelor's or master's degree.`,
        `Experience in a technical role in Support Services.`,
        `Passion for influencing and improving the quality of Esri Support Services and Esri Products.`,
        `Background in software support or technical customer service with direct end-user contact.`,
        `Strong verbal and communication skills.`,
        `Clear understanding of ArcGIS Online infrastructure and functionality.`,
        `Clear understanding of integrated apps with ArcGIS Online.`,
      ],
      recommendedQualifications: [
        `Experience supervising and effectively training technical staff.`,
        `Experience working in customer service or support organizations.`,
        `Robust knowledge of ArcGIS Online.`,
      ],
      // MODAL Information Below
      skills: [
        `Troubleshooting and problem-solving in the Analyst role helped to prepare for the daily tasks a Tech Lead role requires`,
        `Hosting Mobile Taskforce meetings also allowed for improvement in troubleshooting skills and assisting other analysts 
        with issues related to applications. `,
      ],
      newSkills: [
        `Better navigating crucial conversations which in turn led to better managing expectations from all angles.`,
        `Crucial conversations can occur with Analysts, Technical Account Managers and Product teams.`,
      ],
      experiences: [
        `Crucial conversations - this instructor led course prepared me to better navigate tough conversations 
        that may be encountered in this role`,
        `Leadership skills – Joining the Mobile taskforce helped to improve not only presentation skill but also troubleshooting skills.`,
      ],
      dailyResponsibilities: [
        `Working on Tech Assists.`,
        `Reviewing defects to ensure all necessary information is provided.`,
        `Facilitating conversations between various teams.`,
      ],
      secondaryResponsibilities: [
        `Reoccurring meetings – meeting with regional Tech Leads and Domestic Tech Leads, Unit Managers and Lead Product Engineers`,
        `Understanding the general development of analyst.s`,
        `Getting a better understanding of team technical development.`,
        `Office hours, 1 on 1 meetings with analysts and identifying trends allow for us to better understand 
        where improvements may be necessary.`,
      ],
      surprised: [
        `The amount of tough conversations that you have as a Tech Lead. Your crucial conversations are geared towards a 
        different audience as a Tech Lead versus the Analyst role. The audience switch from the customer to other analysts, 
        Technical Account Managers and Product Teams.`,
      ],
      url: '',
      image: 'assets/images/purple.jpg',
    },
    /******************************************     DevOps Support Engineer     *********************************************/
    {
      role: `DevOps Support Engineer`,
      description: `Great software requires hard work by incredibly smart people. Esri Support Services has developed an identity \
      by making sure that we're helpful whenever there is a need.  As a support engineer, you will leverage your in-depth \
      knowledge of ArcGIS Online and ArcGIS Enterprise to build a deeper relationship with Esri’s DevOps team.`,
      department: '',
      responsibilities: [
        `Provide high-quality technical support and customer service to Esri end users through effective communication 
        and efficient troubleshooting.`,
        `Maintain comprehensive case documentation in the customer relationship management (CRM) system.`,
        `Identify issues and log defects for software improvements.`,
        `Own cases and build strong collaborative partnerships with DevOps team to drive fixes and resolution of 
        customer issues dealing with infrastructure/backend problems.`,
        `Assist ArcGIS analysts in understanding when issues are related to the infrastructure or backend of ArcGIS Online.`,
        `Actively monitor, report, and message out system-wide service disruptions to staff to provide better awareness.`,
        `Develop and/or propose tools to assist in identifying common issues customers face as a result of the infrastructure or backend.`,
        `Participate in knowledge transfer and building of common language around infrastructure.`,
        `Provide rotational on-call technical support.`,
      ],
      requirements: [
        `Experience troubleshooting Esri software, preferably ArcGIS Online and/or ArcGIS Enterprise.`,
        `Excellent customer service, troubleshooting, analytical, and problem-solving skills.`,
        `Ability to patiently communicate technical information clearly and concisely.`,
        `Strong prioritization skills, including managing time and workload efficiently.`,
        `Ability to learn new concepts quickly, process large amounts of information, and adapt to a changing work environment.`,
        `Demonstrate excellent presentation skills to internal and external senior management staff.`,
        `Exceptional written and verbal communication skills in high-pressure situations.`,
        `U.S. citizenship or U.S. permanent resident.`,
        `Bachelor’s in GIS, geography, environmental science, computer science, management information systems, 
        or another relevant field, depending on position level.`,
      ],
      recommendedQualifications: [
        `Experience working with one or more programming languages (C#, VB.NET, Java, C++, Swift, or JavaScript).`,
        `Experience using python in troubleshooting service-related issues.`,
        `Background in software support or technical customer service with direct end user contact.`,
      ],
      // MODAL Information Below
      skills: [],
      newSkills: [],
      experiences: [],
      dailyResponsibilities: [],
      secondaryResponsibilities: [],
      surprised: [],
      url: '',
      image: 'assets/images/collab.jpg',
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
