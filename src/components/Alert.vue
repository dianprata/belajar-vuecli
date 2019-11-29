<template>
  <div>
    <b-modal no-close-on-backdrop no-close-on-esc hide-header hide-footer v-model="showAlert" :body-bg-variant="variant">
      <h3 class="text-white">{{ msg }}</h3>
    </b-modal>
  </div>
</template>

<script>
  export default {
    name: "Alert",
    // props adalah kustom atribut yang dapat Anda daftarkan pada suatu komponen.
    // props hampir sama seperti contoh tag html a. ditag html a ada atribut href, nah props itu seperti href.
    props: {
      msg: String,
      showAlert: Boolean,
      variant: String
    }
  }
</script>

<style scoped>

</style>
