export const navigation = [
  {
    title: true,
    name: 'Dashboard',
    wrapper: {            // optional wrapper object
      element: '',      // required valid HTML5 element tag
      attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
    },
    class: ''             // optional class names space delimited list for title item ex: "text-center"
  },
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer',
    badge: {
      variant: 'info',
      text: 'NEW'
    }
  },
  {
    name: 'Connections',
    url: '/connections',
    icon: 'fa fa-plug'
  },
  {
    name: 'Schedules',
    url: '/icons',
    icon: 'icon-calendar'
  },
  {
    name: 'API Management',
    url: '/forms',
    icon: 'fa fa-cogs'
  },
  {
    name: 'Compliance',
    url: '/compliance',
    icon: 'fa fa-user-secret'
  },
  {
    name:'Jira Server',
    url:'/jiraissues',
    icon:'fa fa-jira'
  },
  {
    name: 'Mappings',
    url: '/mappings',
    icon: 'icon-puzzle'
  },
  {
    name: 'Integration Workflows',
    url: '/plugins',
    icon: 'fa fa-tasks'
  },
  {
    name: 'Reports',
    url: '/charts',
    icon: 'fa fa-table'
  },
  {
    name: 'Security',
    url: '/security',
    icon: 'fa fa-shield'
  },
  {
    name: 'Topography',
    url: '/google-maps',
    icon: 'icon-map',
    badge: {
      variant: 'info',
      text: 'NEW'
    }
  },
  {
    divider: true
  },
  {
    title: true,
    name: 'Extras',
  },
  {
    name: 'Documentation',
    url: '/widgets',
    icon: 'fa fa-book'
  },
  {
    name: 'Privacy Policy',
    url: '/uikits',
    icon: 'fa fa-file-text'
  },
  {
    name: 'Help',
    url: '/help',
    icon: 'fa fa-question-circle'
  }
];
