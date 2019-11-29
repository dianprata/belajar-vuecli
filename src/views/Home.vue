<template>
  <div class="home">
    <!--membuat component Header sendiri-->
    <Header title="All Users" />
    <router-link to="/add-user" class="btn btn-primary mb-3">Add New User</router-link>
    <table class="table">
      <thead>
      <tr>
        <th>No</th>
        <th>Name</th>
        <th>Birthday</th>
        <th>Address</th>
        <th>Work</th>
        <th>Actions</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(user, index) in users" :key="user.id">
        <td>{{ index+1 }}</td>
        <td>{{ user.name }}</td>
        <td>{{ user.birthday }}</td>
        <td>{{ user.address }}</td>
        <td>{{ user.work }}</td>
        <td>
          <button class="btn btn-sm btn-secondary mr-2" @click="viewUser(user.id)">View</button>
          <button class="btn btn-sm btn-info mr-2" @click="editUser(user)">Edit</button>
          <button class="btn btn-sm btn-danger" @click="deleteUser(user.id)">Delete</button>
        </td>
      </tr>
      </tbody>
    </table>

    <!--b-modal didapat dari bootstrap vue bisa liat di website nya https://bootstrap-vue.js.org/docs/components-->
    <b-modal v-model="modal" title="Edit User" @ok="updateUser">
      <div class="form-group">
        <div class="form-group-input">
          <label for="">Name</label>
          <input v-model="name" class="form-control" placeholder="Enter your name">
        </div>
      </div>
      <div class="form-group">
        <div class="form-group-input">
          <label for="">Birthday</label>
          <input v-model="birthday" class="form-control" placeholder="Enter your birthday">
        </div>
      </div>
      <div class="form-group">
        <div class="form-group-input">
          <label for="">Address</label>
          <textarea v-model="address" class="form-control" placeholder="Enter your address"></textarea>
        </div>
      </div>
      <div class="form-group">
        <div class="form-group-input">
          <label for="">Work</label>
          <input v-model="work" class="form-control" placeholder="Enter your work">
        </div>
      </div>
    </b-modal>

    <!--membuat component alert sendiri-->
    <Alert :msg="msg" :show-alert="showAlert" variant="primary"></Alert>
  </div>
</template>

<script>
// untuk penulisan from bisa pakai @ maka dia merujuk ke folder src
import Header from '@/components/Header';
import Alert from "@/components/Alert";

export default {
  name: 'home',
  components: {
    Header,
    Alert
  },
  data() {
    return {
      users: [],
      modal: false,
      id: "",
      name: "",
      birthday: "",
      address: "",
      work: "",
      msg: "",
      showAlert: false
    }
  },
  methods: {
    getUsers() {
      this.$axios.get('http://localhost:3000/users')
        .then(res => {
          this.users = res.data;
        }).catch(err => {
          console.log('err', err);
      })
    },
    //function edit user ini untuk memasukkan data user yang ingin di edit ke tampilan
    editUser(data) {
      this.id = data.id;
      this.modal = true;
      this.$axios.get('http://localhost:3000/users/'+this.id)
        .then(res => {
          this.name = res.data.name;
          this.birthday = res.data.birthday;
          this.address = res.data.address;
          this.work = res.data.work;
        }).catch(err => {
          console.log('err', err);
      })
    },
    //function update user ini untuk mengirimkan hasil perubahan yang dilakukan
    updateUser() {
      const payload = {
        name: this.name,
        birthday: this.birthday,
        address: this.address,
        work: this.work
      };
      //untuk edit biasanya menggunakan method put untuk membedakan antara memasukkan data atau mengedit data
      this.$axios.put('http://localhost:3000/users/'+this.id, payload)
        .then(res => {
          this.showAlert = true;
          this.msg = "Update Success";
          this.getUsers();
          setTimeout(() => {
            this.showAlert = false;
          }, 1000);
          this.resetForm();
        }).catch(err => {
          console.log('err', err);
      })
    },
    deleteUser(id) {
      if(confirm('Are you sure for delete this user?')) {
        this.$axios.delete('http://localhost:3000/users/' + id)
          .then(res => {
            alert('Delete Success');
            this.getUsers();
          }).catch(err => {
          console.log('err', err);
        })
      }
    },
    viewUser(id) {
      // menggunakan router push untuk memindahkan ke url lain
      // `/view/${id}` artinya kita akan menampilkan data sesuai id yang di klik
      this.$router.push(`/view/${id}`);
    },
    //function ini untuk mengembalikan ke kondisi data yang awal. biasa dipanggil ketika setelah selesai update user
    resetForm() {
      this.modal = false;
      this.id = "";
      this.name = "";
      this.birthday = "";
      this.address = "";
      this.work = "";
    }
  },
  created() {
    this.getUsers();
  }
}
</script>

<style scoped>
/* 
  tempat untuk membuat style css sendiri. 
  scoped artinya style css yang dituliskan disini tidak dapat dibaca oleh page lain
  hanya bisa dipage ini saja
 */
</style>
