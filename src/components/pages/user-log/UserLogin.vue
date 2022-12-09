<template>
    <div class="container my-5">
        <b-card title="LogIn" class="card mx-auto text-center p-4">
            <b-form @submit.prevent="onSubmit">
                <b-form-group class="mb-4 mt-4">
                    <b-form-input 
                      id="useremail"
                      type="email"
                      v-model="email"
                      placeholder="Enter your email "
                      required
                    >
                    </b-form-input>
                </b-form-group>
                <b-form-group class="mb-4">
                    <b-form-input 
                      id="userpassword"
                      type="password"
                      v-model.trim="password"
                      placeholder="Enter your password"
                      required
                    ></b-form-input>
                </b-form-group>
                <b-form-group class="mb-4">
                    <b-card-text class="text-justify">
                        <b-form-checkbox class="mb-2 mr-sm-2 mb-sm-0">
                            Remember me
                        </b-form-checkbox>
                    </b-card-text>
                    <b-button type="submit" class="w-100 signin-btn" variant="primary">Login</b-button>
                </b-form-group>
                <b-form-group>
                    <b-card-text class="text-justify">
                        Don't have an account? <b-link to="/signup">SignUp</b-link>
                    </b-card-text>
                </b-form-group>
            </b-form>
        </b-card>
    </div>  
</template>

<script>
import Vue from "vue";
export default {
    name : 'UserLogin',
    data(){
        return{
            email:'',
            password:''
        }
    },
    methods:{
        async onSubmit(){
            const loginDetails={
                email: this.email,
                password: this.password
            }
            const login = await this.$store.dispatch('loginUser',loginDetails);           
             if(login){
                Vue.$toast.open({
                    message: 'Logged In',
                    type:'success'
                });
                this.$router.push('/calendar');
            }else{
                Vue.$toast.open({
                    message: "You are not autherized",
                    type:'error',
                    position:'bottom'
                });
            }
        }
    }
}
</script>

<style>

</style>