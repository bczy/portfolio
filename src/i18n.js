import i18next from 'i18next'

i18next.init({
  interpolation: {
    // React already does escaping
    escapeValue: false
  },
  lng: 'en',
  resources: {
    en: {
      translation: {
        helloWorld: 'Hello World!',
        idCard: {
          brief: 'Bertrand (aka trambz), coding enthousiast.',
          skills: 'Skills: React, VuesJS, Unity, C#, C++',
          hobbies: 'Hobbies: street-art, longboarding, travels, soccer, retro-gaming'
        },
        scroll: 'SCROLL',
        welcome: 'Welcome to my playground!',
        description: 'Sorry, this is a WIP!',
        extra: 'Chrome only for the moment.',
        siteMadeWidth: 'This experiment is made with:',
        technoList: 'React, Spring, and Three-Fiber',
        assets: 'Thanks to ansimuz for assets',
        sitePurpose: 'The purpose of the site?',
        fun: 'just have some fun',
        learnTechz: 'and learn new techz',
        ifInterested: "if you're interested",
        checkIt: 'you can check',
        gitHub: 'my GitHub',
        linkedin: 'and my linkedin',
        thanks: 'Thanks for your visit!',
        medium: '=> Medium article ASAP;)'
      }
    }
  }
})

export default i18next
