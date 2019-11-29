<template>
  <div>
    <judul title="View User"></judul>
    <button class="btn btn-secondary" @click="backToHome">Back to Home</button>
    <div class="row">
      <div class="col-md-4 mx-auto">
        <div class="card">
          <div class="card-body">
            <h5 class="mb-1">Name</h5>
            <label class="mb-2">{{ name }}</label>
            <h5 class="mb-1">Birthday</h5>
            <label class="mb-2">{{ birthday }}</label>
            <h5 class="mb-1">Address</h5>
            <label class="mb-2">{{ address }}</label>
            <h5 class="mb-1">Work</h5>
            <label class="mb-2">{{ work }}</label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from "@/components/Header";
  export default {
    name: "ViewUser",
    //membuat nama component sendiri.
    //yang sebelumnya namanya Header dapat diganti menjadi 'judul'
    components: {
      'judul': Header 
    },
    data() {
      return {
        name: "",
        birthday: "",
        address: "",
        work: ""
      }
    },
    methods: {
      //untuk mengambil data user sesuai id.
      //karena saat di page Home untuk mem-view kita membuat url nya sesuai dengan id nya
      //dan di router sudah kita membuat path yang id nya dinamis
      //kita bisa mengambil params dengan this.$route.params.id    
      getView() {
        this.$axios.get('http://localhost:3000/users/'+this.$route.params.id)
          .then(res => {
            this.name = res.data.name;
            this.birthday = res.data.birthday;
            this.address = res.data.address;
            this.work = res.data.work;
          }).catch(err => {
            console.log('err', err);
        })
      },
      backToHome() {
        this.$router.push('/');
      }
    },
    created() {
      this.getView();
    }
  }
</script>

<style scoped>

</style>
