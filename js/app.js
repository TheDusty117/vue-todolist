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
        inputValue: '',

        
      }
    },

    //METODI FUNZIONI
    methods: {
      removeTask(startIndex){
        this.tasks.splice(startIndex,1)
      },

      addTask(){
        const newTask = this.inputValue // grazie a this.inputValue, tramite il v-model riusciamo a prendere il valore inserito nell'input da utente, ci creiamo una const
        this.tasks.push({text: newTask , done: false}) //indico di pushare il valore inserito in input, dentro array di oggetti tasks, inoltre gli inserisco le sue specifiche nelle {{}}
        this.inputValue = ''
      },
      
      // booleanTransformer(){
      //   this.done = false
      //   if (this.done === false){
      //     this.done = true
      //   }
      // },


    }

  }).mount('#app')