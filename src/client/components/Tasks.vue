<template>
  <div>
    <h1>Tasks</h1>

    <div class="panel panel-default">
      <div class="panel-heading" style="margin-bottom:20px;">Update task</div>
      <div class="form-horizontal">
        <div class="form-group">
          <label class="col-sm-2 control-label">Title</label>
          <div id="inputTitle" class="col-sm-6">
            <input v-model="title" type="text" class="form-control">
          </div>
        </div>
        <div class="form-group">
          <label class="col-sm-2 control-label">Description</label>
          <div class="col-sm-9">
            <input v-model="description" type="text" class="form-control">
          </div>
        </div>
        <div class="form-group">
          <label class="col-sm-2 control-label">Completed</label>
          <div class="col-sm-1">
            <input v-model="completed" type="checkbox" class="form-control">
          </div>
        </div>
        <button @click="updateTask" class="btn btn-primary">Submit</button>
      </div>
    </div>

    <h2>Lists</h2>

    <table class="table table-condensed table-hover">
      <tr>
        <th>id</th><th>title</th><th>description</th><th>completed</th><th></th>
      </tr>
      <tr v-for="task in tasks">
        <td>{{task.id}}</td>
        <td>{{task.title}}</td>
        <td>{{task.description}}</td>
        <td>{{task.completed}}</td>
        <td>
          <button @click="setTask($index)" class="btn btn-xs btn-success"><span class="glyphicon glyphicon-pencil"></span></button>
          <button @click="removeTask(task.id)" class="btn btn-xs btn-danger"><span class="glyphicon glyphicon-trash"></span></button>
        </td>
      </tr>
    </table>

  </div>
</template>

<script>
export default {
  data () {
    return {
      tasks: [],
      id: -1,
      title: '',
      description: '',
      completed: false
    }
  },
  ready () {
    this.$http.get('/api/tasks').then((response) => {
      this.tasks = response.data.tasks
    })
  },
  methods: {
    updateTask () {
      if (!this.checkFields()) return
      var data = {
        title: this.title,
        description: this.description,
        completed: this.completed
      }
      if (this.id === -1) { // add
        this.$http.post('/api/task', data).then((response) => {
          this.tasks = response.data.tasks
        })
      } else {  // update
        this.$http.put('/api/task' + this.id, data).then((response) => {
          this.tasks = response.data.tasks
        })
      }
      this.clearFields()
    },
    removeTask (id) {
      this.$http.delete('/api/task', {id: id}).then((response) => {
        this.tasks = response.data.tasks
      })
    },
    setTask (index) {
      this.id = this.tasks[index].id
      this.title = this.tasks[index].title
      this.description = this.tasks[index].description
      this.completed = this.tasks[index].completed
    },
    checkFields () {
      var errElems = document.querySelectorAll('.has-error')
      for (var i = 0; i < errElems.length; i++) errElems[i].classList.remove('has-error')

      if (!this.title) {
        var element = document.getElementById('inputTitle')
        element.parentNode.classList.add('has-error')
        return false
      }
      return true
    },
    clearFields () {
      this.id = -1
      this.title = ''
      this.description = ''
      this.completed = false
    }
  }
}
</script>
