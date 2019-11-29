<template>
    <div class="row justify-content-center">
        <div class="col-md-5">
            <div class="card">
                <div class="card-header">Add New User</div>
                <div class="card-body">
                    <div class="form-group">
                        <div class="form-group-input">
                            <label for="">Name</label>
                            <input type="text" v-model="name" class="form-control" placeholder="Enter your name">
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="form-group-input">
                            <label for="">Birthday</label>
                            <input type="text" v-model="birthday" class="form-control" placeholder="Enter your birthday">
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
                            <input type="text" v-model="work" class="form-control" placeholder="Enter your work">
                        </div>
                    </div>
                    <button class="btn btn-primary btn-sm mr-2" @click="addUser">Add User</button>
                    <button class="btn btn-secondary btn-sm" @click="cancel">Cancel</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    //untuk penamaan component tidak boleh pakai spasi
    name: "Add-User",
    data() {
        return {
            name: "",
            birthday: "",
            address: "",
            work: ""
        }
    },
    methods: {
        addUser() {
            const payload = {
                name: this.name,
                birthday: this.birthday,
                address: this.address,
                work: this.work
            };
            
            this.$axios.post('http://localhost:3000/users', payload)
            .then(res => {
                alert('Tambah User Berhasil!');
                this.cancel();
            }).catch(err => {
                console.log('err', err);
            })
        },
        cancel() {    
            this.$router.push('/');
        }
    }
    
}
</script>