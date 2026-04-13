import type { PortfolioData } from '../types/portfolioData'

import mobility_wellness from '../assets/images/mobility_exercise.png'
import wellness_mindfulness from '../assets/images/wellness_mindfulness.png'
import ergonomics from '../assets/images/ergonomics_hydration.png'
import code_setup from '../assets/images/code_setup.png'
import tech_algorithm from '../assets/images/tech_algorithm.png'
import tech_wellness_analytics from '../assets/images/tech_wellness_analytics.png'

export const portfolioData: PortfolioData = {
  tech: {
    label: 'Tech',
    eyebrow: 'Software Engineer • Builder • Problem Solver',
    heading: 'I build scalable digital systems with real-world impact.',
    text: 'From simple Frontends, to RESTful APIs, to complex product architecture. I create practical solutions that balance performance, usability, and long-term maintainability.',
    primaryCta: 'View Projects',
    secondaryCta: {
      eyebrow: 'Open to Opportunities',
      headline: "Let's Build\nRemarkable Things\nTogether.",
      sub: "Whether you're scaling a product, launching a startup, or need an engineering partner — I'm the person to call.",
      cta: 'Download Resume',
      primary: 'Start a Conversation',
      secondary: 'View LinkedIn',
    },
    highlights: [
      {
        title: 'Scalable Web Applications',
        subtitle: 'Web Apps · AI Integration · Backend Engineering',
        description: 'Frontend and backend systems built for performance, structure, and scalability.',
        link: "",
        image: code_setup,
      },
      {
        title: 'Algorthimic & Structured Engineering',
        subtitle: 'Prototyping · Service Management · Containerization',
        description: 'Proper project planning, reliable backend structuring, clean data handling, and maintainable service architecture.',
        link: "",
        image: tech_algorithm,
      },
      {
        title: 'Product Thinking',
        subtitle: 'Service Maintenance · Product Development · MultiSystem Integration',
        description: 'A technical approach shaped by usability, business goals, and long-term sustainability.',
        link: "",
        image: tech_wellness_analytics,
      }
    ],
    stats: [
      {
        label: "Years of Experience",
        value: "+5",
      },
      {
        label: "No. of Projects",
        value: "6",
      },
      {
        label: "Users Impacted",
        value: "+500K"
      }
    ]
  },

  wellness: {
    label: 'Wellness',
    eyebrow: 'Sport Scientist • Performance Coach • Wellness Expert',
    heading: 'I help individuls and teams improve movement, performance and health.',
    text: 'My training model blends functional movement, strength training, workplace wellness, and practical performance strategies designed for individuals and organizations.',
    primaryCta: 'Explore Services',
    secondaryCta: {
      eyebrow: 'Book a Consultation',
      headline: "Ready to\nElevate Your\nPerformance\nPerformance?",
      sub: "Whether you're an executive, athlete, or organization — together let's design a system that creates a lasting impact on your health and performance.",
      cta: 'View Gallery',
      primary: 'Book a Session',
      secondary: 'View Gallery',
    },
    highlights: [
      {
        title: 'Corporate Wellness',
        subtitle: 'Ergonomics · Work - Life Balance · Peak Performance',
        description: 'Professional wellness experiences designed to improve individual/team energy, focus, and productivity both at home and in the office.',
        image: wellness_mindfulness
      },
      {
        title: 'Mobility & Performance',
        subtitle: 'Functional Movement · Stetches · Strength Training',
        description: 'Simple, effective exercises that support body strength, movement quality, and sustainable progress.',
        image: mobility_wellness
      },
      {
        title: 'Holistic Wellbeing',
        subtitle: 'Assessments · Bespoke Programs · Nutrition',
        description: 'Practical support tailored to everyday routines, fitness goals, and enhancing performance.',
        image: ergonomics
      }
    ],
    stats: [
      {
        label: "Years of Coaching",
        value: "+8",
      },
      {
        label: "Clients Transformed",
        value: "+5K",
      },
      {
        label: "Corporate Programs Delivered",
        value: "+6"
      }
    ]
  }
};