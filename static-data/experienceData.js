import * as FreelanceLogo from '../assets/img/freelance-logo.png'
import * as TopicLogo from '../assets/img/topic-talk-logo.png'
import * as UniversalLogo from '../assets/img/universal-logo.png'

export const experienceData = {
  job1: {
    year: '2020 - Present',
    logoImage: TopicLogo,
    companyName: 'Topic Talk',
    position: 'Software Developer',
    highlights: [
      'Built wireframes and UI using Adobe XD.',
      'Designed, coded, and tested an English evaluator (CRUD app) concept using React, Firebase, and Jest.',
      'Created a database where users can store their quiz results.',
      'Implemented the new React hooks technology (Context API) to manage app state.',
    ],
  },

  job2: {
    year: '2018 - Present',
    logoImage: FreelanceLogo,
    companyName: 'Freelance',
    position: 'Web Developer / SEO / UI-UX',
    highlights: [
      'Carried out UX / UI strategy for high-profile social media influencers (50k+ followers) such as the Lobxs sports group lead by Maigua Ojeda - lobxs.com',
      'Rebuilt real estate websites for both developers and estate agents improving their brand identity.',
      'Led the SEO strategy and implementation for peaceofmindmadrid.com.',
    ],
  },

  job3: {
    year: '2014 - 2017',
    logoImage: UniversalLogo,
    companyName: 'Universal Music',
    position: 'Music Programmer / Producer',
    highlights: [
      'Established a startup music development studio into a profitable business with an average of 2 new clients per month and repeat clients every 3-4 months.',
      'Planned band arrangements using cutting-edge digital instruments.',
      'Achieved label deadline goals which resulted in strong trust with the A&R department and more creative control for our team.',
      'Actively networked outside of the workplace and used mixed network building methods, such as social media targeting and industry events, to accomplish revenue goals.',
      'Made a competitive referral scheme by paying our brand ambassadors 20% of the business they referred.',
      'Successfully pitched our clients to Universal Music and successfully secured a deal in excess of £100,000.',
    ],
  },
}

export default experienceData
