import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: '#420000',
          secondary: '#b0bec5',
          accent: '#900000',
        },
      },
    },
});
