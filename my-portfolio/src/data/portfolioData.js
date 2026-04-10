import mobility_wellness from '../assets/images/mobility_exercise.png'
import wellness_mindfulness from '../assets/images/wellness_mindfulness.png'
import ergonomics from '../assets/images/ergonomics_hydration.png'
import code_setup from '../assets/images/code_setup.png'
import tech_algorithm from '../assets/images/tech_algorithm.png'
import tech_wellness_analytics from '../assets/images/tech_wellness_analytics.png'

export const portfolioData = {
  tech: {
    label: 'Tech',
    eyebrow: 'Software Engineer • Builder • Problem Solver',
    heading: 'I build clean, scalable digital systems with real-world impact.',
    text: 'From frontends and APIs to product architecture, I create practical solutions that balance performance, usability, and long-term maintainability.',
    primaryCta: 'View Tech Work',
    secondaryCta: {
      eyebrow: 'Open to Opportunities',
      headline: "Let's Build\nSomething\nRemarkable.",
      sub: "Whether you're scaling a product, launching a startup, or need an engineering partner — I'd like to hear from you.",
      cta: 'Start a Conversation',
      secondary: 'View LinkedIn',
    },
    highlights: [
      {
        title: 'Scalable Web Applications',
        description: 'Production-minded frontend and backend systems built for performance, structure, and growth.',
        image: code_setup
      },
      {
        title: 'API & Backend Engineering',
        description: 'Reliable backend logic, clean data handling, and maintainable service architecture.',
        image: tech_algorithm
      },
      {
        title: 'Product Thinking',
        description: 'A technical approach shaped by usability, business goals, and long-term sustainability.',
        image: tech_wellness_analytics
      }
    ]
  },
  wellness: {
    label: 'Wellness',
    eyebrow: 'Wellness Professional • Performance Focused • Corporate Wellness',
    heading: 'I help people and teams improve movement, health, and sustainable performance.',
    text: 'My wellness work blends training, mobility, workplace wellness, and practical performance strategies designed for individuals and organizations.',
    primaryCta: 'Explore Services',
    secondaryCta: {
      eyebrow: 'Book a Consultation',
      headline: "Ready to\nElevate Your\nPerformance\nor\nYour Employee's\nPerformance?",
      sub: "Whether you're an executive, athlete, or organization — let's design a performance system that creates lasting change.",
      cta: 'Book a Session',
      secondary: 'Download Services Guide',
    },
    highlights: [
      {
        title: 'Corporate Wellness',
        description: 'Professional wellness experiences designed to improve team energy, movement, and productivity.',
        image: wellness_mindfulness
      },
      {
        title: 'Mobility & Performance',
        description: 'Simple, effective strategies that support strength, movement quality, and sustainable progress.',
        image: mobility_wellness
      },
      {
        title: 'Personalized Guidance',
        description: 'Practical support tailored to real routines, goals, and everyday performance.',
        image: ergonomics
      }
    ]
  }
}
