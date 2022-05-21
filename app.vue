<template>
  <div>
    {{teste}}
  </div>
</template>
<script lang="ts" setup>
interface iPerson {
  name: string,
  age: number
}

const teste:iPerson = {
  name: 'Dall',
  age: 10
}
</script>
