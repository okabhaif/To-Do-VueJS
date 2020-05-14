<template>
  <div>
  <h1>{{title}}</h1>

    <input v-model="currentTodo" @submit.prevent="addTodo" @keydown.enter="addTodo()" placeholder="Add a todo">


     <button v-on:click.prevent="addTodo">add</button>
      <ul class="todos">
        <li v-for="todo in todos" :key="todo.id">
          <span v-on:click.prevent="clickToEdit(todo)" v-show="editTodoId !== todo.id" :class="{ completed: todo.completed }"> 
            {{ todo.label }} 
          </span> 

                    <input v-model="todo.label" v-show="editTodoId == todo.id" v-on:keyup.enter="saveEdit">


          <input type="checkbox" v-model="todo.completed">

          <button v-on:click.prevent="removeTodo(todo)">remove</button> 
        </li>
    </ul>
  </div>
</template>

     


<script>
export default {
  data() {
    return {
           title: "To do list app",

      todos: [],
      currentTodo: '',
      editTodoId: null
    };
  },
  methods: {
    addTodo() {
      if(this.currentTodo !== ''){
      this.todos.push({
        id: this.todos.length, 
        label: this.currentTodo, 
        completed: false
        });
      this.currentTodo = '';
      }
    },
    removeTodo(todo){

var index = this.todos.indexOf(todo);
this.todos.splice(index, 1);
    },
    clickToEdit (todo) {
      this.editTodoId = todo.id; 
    },
    saveEdit(){
      this.editTodoId = null;
    }
    
  }
};
</script>

<style>
.completed{
  text-decoration: line-through;
};
</style>