const { createApp } = Vue

  createApp({
    data() {
      return {
        tasksArrObjects : [
          {
            text: 'andare a Khumjung',
            done: 'false',
          },
          {
            text: 'imparare tibetano',
            done: 'false',
          },
          {
            text: 'insegnare agli Sherpa VueJS',
            done: 'false',
          },
        ]
      }
    }
  }).mount('#app')