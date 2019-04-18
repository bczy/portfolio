import i18next from 'i18next';

i18next
  .init({
    interpolation: {
      // React already does escaping
      escapeValue: false,
    },
    lng: 'en', // 'en' | 'fr'
    resources: {
      en: {
        translation: {
          header: [ 
            '##############################################################', 
            '# Hi there, welcome to my playground!', 
            '# Hobbies: street-art, longboarding, travels, soccer, retro-gaming', 
            '# Skills: React, Vues.js, JS, Unity, ReactNative, C#, C++, ZSH, Node.JS, JAVA, SQL',
            '##############################################################', 
          ],
        },
      },
      fr: {
        translation: {
          welcome: 'Bienvenue!',
          idCard: { 
            headerSeparator: '################################', 
            brief: 'Bertrand (aka trambz), coding enthousiast.', 
            skills: 'Skills: React, VuesJS, Unity, C#, C++',
            line4: 'Hobbies: street-art, longboarding, travels, soccer, retro-gaming', 
          }, 
        
        },
      },
    },
  })

export default i18next