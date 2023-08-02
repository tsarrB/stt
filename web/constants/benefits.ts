import {
  ChartBarSquareIcon,
  CloudIcon,
  CursorArrowRaysIcon,
  RocketLaunchIcon,
  ServerStackIcon,
  ShieldCheckIcon,
} from '@heroicons/vue/24/solid'

export const benefitOne = {
  title: 'Everything is evolving – marketing and analytics are no exception.',
  desc: 'Since some browsers have already started eliminating third party cookies, we need to start looking for a solution to keep collecting data and ensure that our data is reliable.',
  image: '/img/benefit-1.svg',
  bullets: [
    {
      title: 'We are a one-stop shop',
      desc: 'We\'re building an infrastructure that simplifies server-side tracking. Everything from cloud hosting to custom solutions.',
      icon: CloudIcon,
    },
    {
      title: 'Save time and money',
      desc: 'Cheaper. Better. Faster. Stronger. Get all the tools you need and enjoy every step with Stape.',
      icon: ChartBarSquareIcon,
    },
    {
      title: 'Get the help you need',
      desc: 'We\'ve been working in this niche for several years. If you\'re experiencing issues with setting up server-side tracking, we’re here to help you out!',
      icon: CursorArrowRaysIcon,
    },
  ],
}

export const benefitTwo = {
  title: 'A few large advantages',
  desc: 'Moving the tracking mechanism for browser scripts to your own server brings you many benefits:',
  image: '/img/benefit-2.svg',
  bullets: [
    {
      title: 'Performance gain',
      desc: 'Instead of sending the requests to the user, they can now be sent to the server. That lowers the load time, which increases your website’s speed.',
      icon: RocketLaunchIcon,
    },
    {
      title: 'Data accuracy',
      desc: 'With server-side tracking, all cookies can be put in a first-party context – something browsers and adblockers don’t affect.',
      icon: ServerStackIcon,
    },
    {
      title: 'A better grasp on security',
      desc: 'When you migrate these scripts to a server, you get a better handle on which data is collected and which data is sent to an external party such as Google and Facebook.',
      icon: ShieldCheckIcon,
    },
  ],
}
