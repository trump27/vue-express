<template>
  <div>
    <h1>Info</h1>
    <button @click="getMsg" class="btn btn-primary">call api</button>
    <div>{{msg | json}}</div>
    <div>{{msg2 | json}}</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: '',
      msg2: ''
    }
  },
  methods: {
    getMsg () {
      this.$http.get('/api/msg').then((response) => {
        this.msg = response.data
      })
      this.$http.post('/api/msg2', {value: 'hello'}).then((response) => {
        this.msg2 = response.data
      })
    }
  }
}
</script>
