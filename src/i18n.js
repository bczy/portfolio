import i18next from 'i18next';

i18next
  .init({
    interpolation: {
      // React already does escaping
      escapeValue: false,
    },
    lng: 'en', // 'en' | 'fr'
    // Using simple hardcoded resources for simple example
    resources: {
      en: {
        translation: {
          helloWorld: 'Hello World!',
          idCard: { 
            brief: 'Bertrand (aka trambz), coding enthousiast.', 
            skills: 'Skills: React, VuesJS, Unity, C#, C++',
            hobbies: 'Hobbies: street-art, longboarding, travels, soccer, retro-gaming', 
          }, 
          welcome: 'Welcome to my playground',
          description: 'You will find here some stuff: poc, demo...',
        },
      },
      fr: {
        translation: {
          welcome: 'Bienvenue!',
          idCard: { 
            brief: 'Bertrand (aka trambz), coding enthousiast.', 
            skills: 'Skills: React, VuesJS, Unity, C#, C++',
            line4: 'Hobbies: street-art, longboarding, travels, soccer, retro-gaming', 
          }, 
        },
      },
    },
  })

export default i18next