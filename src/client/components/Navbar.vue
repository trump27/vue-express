<template>
  <nav class="navbar navbar-default navbar-fixed-top navbar-inverse">
    <div class="container-fluid">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navmenu">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="#">Sample</a>
      </div>
      <div class="collapse navbar-collapse" id="navmenu">
        <ul class="nav navbar-nav">
          <li><a v-link="'/info'">Info</a></li>
          <li><a v-link="'/tasks'">Tasks</a></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>
