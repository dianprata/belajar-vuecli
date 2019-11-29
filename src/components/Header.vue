<template>
  <div>
    <h3 class="mb-3">{{ title }}</h3>
  </div>
</template>

<script>
  export default {
    name: "Header",
    // props adalah kustom atribut yang dapat Anda daftarkan pada suatu komponen.
    // props hampir sama seperti contoh tag html a. ditag html a ada atribut href, nah props itu seperti href.
    props: {
      title: String
    }
  }
</script>

<style scoped>

</style>
