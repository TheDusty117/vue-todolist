const { createApp } = Vue

  createApp({
    data() {
      return {
        //ARRAY DI OGGETTI
        tasks : [
          {
            text: 'andare a Khumjung',
            done: true,
          },
          {
            text: 'imparare tibetano',
            done: false,
          },
          {
            text: 'insegnare agli Sherpa VueJS',
            done: false,
          },
        ],

      

      }
    },

    //METODI FUNZIONI
    methods:{
      isFalseLine(){}


    }

  }).mount('#app')