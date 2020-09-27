<template>
  <div class="app-container">
    <md-toolbar>
      <h1>{{title}}</h1>
    </md-toolbar>

    <!-- Add Todo -->

    <md-field class=addTodo>
      <md-textarea v-model="currentTodo" @submit.prevent="addTodo" @keydown.enter.prevent="addTodo()" placeholder="Add a todo">
      </md-textarea>
      <md-button class="md-icon-button md-raised" v-on:click.prevent="addTodo">
        <md-icon>add</md-icon>
      </md-button>
    </md-field>

    <!-- List of Todo's -->

    <md-list class="todos" v-if="showTodos()">
      <md-list-item class="todo-title">Things I need to do:</md-list-item>
      <md-list-item class="list-item" v-for="todo in todos" :key="todo.id">
        <md-checkbox type="checkbox" v-model="todo.completed"></md-checkbox>
          <span v-on:click.stop.prevent="clickToEdit(todo)" v-show="editTodoId !== todo.id" :class="{ completed: todo.completed }"> 
            {{ todo.label }} 
          </span> 
        
        <input v-model="todo.label" v-show="editTodoId == todo.id" v-on:keyup.enter="saveEdit">
        <md-button v-on:click.prevent="removeTodo(todo)">remove</md-button> 
      </md-list-item>
    </md-list>
  </div>
</template>

     


<script>
export default {
    name: 'RegularToolbar',
  data() {
    return {
           title: "To do list app",

      todos: [],
      currentTodo: '',
      editTodoId: null
    };
  },
  methods: {
    showTodos () {
      return this.todos.length > 0 
    },
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

<style lang="scss" scoped>
.addTodo{
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 20px;
  width: 80%;
  height: 80px;
}
.todos {
  width: 60%;
  margin: 0 auto;
  padding-top: 0px;
  padding-bottom: 0px;
    border: 0.5px solid dark-grey;

}
.todo-title{
  background: #212121;
}

.list-item{
    border-top: 0.5px solid white;
}
.md-button{
  border: 1.5px solid white !important;
}
.completed{
  text-decoration: line-through;
  opacity: 0.5;
};
</style>