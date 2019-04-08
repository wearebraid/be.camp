<template>
  <span />
</template>


<script>
export default {
  created () {
    if (typeof window !== 'undefined') {
      window.location = `${window.location.protocol}//${window.location.hostname}${(window.location.port ? window.location.port : '')}/swarm`
    }
  }
}
</script>

<style>
body {
  display: none;
}
</style>
