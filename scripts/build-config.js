/**
* F7 Build Configuration
* Don't modify this file!
* If you want to build custom version of F7, just put build-config-custom.js with the required configuration in this folder. Or build it using command line:
* $ npm run build:prod -- --config path/to/config.js --output path/to/output/folder
*/

const config = {
  target: 'universal',
  rtl: false,
  components: [
    // Modals
    'dialog',
    'popup',
    'login-screen',
    'popover',
    'actions',
    'sheet',
    'toast',

    // Loaders
    'preloader',
    'progressbar',

    // List Components
    'sortable',
    'swipeout',
    'accordion',
    'contacts-list',
    'virtual-list',
    'list-index',

    // Timeline
    'timeline',

    // Tabs
    'tabs',

    // Panel
    'panel',

    // Card
    'card',

    // Chip
    'chip',

    // Form Components
    'form',
    'input',
    'checkbox',
    'radio',
    'toggle',
    'range',
    'stepper',
    'smart-select',

    // Grid
    'grid',

    // Pickers
    'calendar',
    'picker',

    // Page Components
    'infinite-scroll',
    'pull-to-refresh',
    'lazy',

    // Data table
    'data-table',

    // FAB
    'fab',

    // Searchbar
    'searchbar',

    // Messages
    'messages',
    'messagebar',

    // Swiper
    'swiper',

    // Photo Browser
    'photo-browser',

    // Notifications
    'notification',

    // Autocomplete
    'autocomplete',

    // VI Video Ads
    'vi',

    // Typography
    'typography',
  ],
  darkTheme: true,
  themes: [
    'ios',
    'md',
  ],
  ios: {
    themeColor: '#007aff',
    colors: {
      red: '#ff3b30',
      green: '#4cd964',
      blue: '#007aff',
      pink: '#ff2d55',
      yellow: '#ffcc00',
      orange: '#ff9500',
      gray: '#8e8e93',
      white: '#ffffff',
      black: '#000000',
      /*
      purple: '#5856d6',
      deeppurple: '#673ab7',
      indigo: '#3f51b5',
      lightblue: '#5ac8fa',
      cyan: '#00bcd4',
      teal: '#009688',
      lightgreen: '#8bc34a',
      lime: '#cddc39',
      amber: '#ffc107',
      deeporange: '#ff5722',
      brown: '#795548',
      bluegray: '#607d8b',
      */
    },
  },
  md: {
    themeColor: '#2196f3',
    colors: {
      red: '#f44336',
      green: '#4caf50',
      blue: '#2196f3',
      pink: '#e91e63',
      yellow: '#ffeb3b',
      orange: '#ff9800',
      gray: '#9e9e9e',
      white: '#ffffff',
      black: '#000000',
      /*
      purple: '#9c27b0',
      deeppurple: '#673ab7',
      indigo: '#3f51b5',
      lightblue: '#03a9f4',
      cyan: '#00bcd4',
      teal: '#009688',
      lightgreen: '#8bc34a',
      lime: '#cddc39',
      amber: '#ffc107',
      deeporange: '#ff5722',
      brown: '#795548',
      bluegray: '#607d8b',
      */
    },
  },
  win: {
    themeColor: '#0078d7',
    colors: {
      red: '#e81123',
      green: '#10893e',
      blue: '#0078d7',
      pink: '#ea005e',
      yellow: '#ffb900',
      orange: '#f7630c',
      gray: '#767676',
      white: '#ffffff',
      black: '#000000',
      /*
      purple: '#9a0089',
      deeppurple: '#881798',
      indigo: '#0063b1',
      lightblue: '#0099bc',
      cyan: '#00b7c3',
      teal: '#038387',
      lightgreen: '#00cc6a',
      lime: '#cddc39',
      amber: '#ff8c00',
      deeporange: '#da3b01',
      brown: '#7e735f',
      bluegray: '#68768a',
      */
    },
  },
};

module.exports = config;
