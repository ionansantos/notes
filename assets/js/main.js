const vm = new Vue({
     el:'#app',
     data:{
     notas:[],
     
     },    
     methods:{
     toggleEditor(index){
          this.notas[index].editor = !this.notas[index].editor
          this.updateLocalStorage();
          },

     novaNota(){
          this.notas.push({
          text: '',
          editor:false,
     })
          this.updateLocalStorage();
     }, 

     deletaNota(index){
          this.notas.splice(index, 1)
          this.updateLocalStorage();
      },

      updateLocalStorage(){
           localStorage.setItem('NOTAS', JSON.stringify(this.notas))
      }
      },

      mounted () {
          if (localStorage.getItem('NOTAS')) {
          
               this.notas = JSON.parse(localStorage.getItem('NOTAS'));
           } 
      }
})