const { createApp } = Vue

  createApp({
    data() {
      return {
        //ARRAY DI OGGETTI
        tasks : [
          {
            text: 'andare a Khumjung',
            done: false,
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

        // valore dell'input inserito nella pagina, inputValue si trova anche all'interno del tag, pertanto possono comunicare
        inputValue: {
          text: '',
          done: false,
        },


      }
    },

    //METODI FUNZIONI
    methods: {
      removeTask(startIndex){
        this.tasks.splice(startIndex,1)
      },

      addTask(){
        const newTask = this.inputValue
        this.tasks.push(newTask)
        this.inputValue = ''
      },


    }

  }).mount('#app')