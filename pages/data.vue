<template>
  <h1>API products</h1>
  <div class="grid grid-cols-4  gap-5">
    <div v-for="p in products">
            {{p.title}}
    </div>
  </div>
</template>



<script setup lang="ts">
definePageMeta({
  layout: 'default'
})

const { data: products } = await useFetch('https://jsonplaceholder.typicode.com/posts')
</script>