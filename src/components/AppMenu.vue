<template>
    <div>
        <b-navbar toggleable="lg" type="light" variant="info"
        class="meet-nav">
            <b-navbar-brand href="/">Meetings App</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav v-if="this.$store.state.auth.token!==''">
            <b-nav-item href="/calander">Calendar</b-nav-item>
                <b-nav-item href="/meetings">Meetings</b-nav-item>
                <b-nav-item href="/teams">Teams</b-nav-item>
            </b-navbar-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto"  v-if="this.$store.state.auth.token!=''">
            <b-nav-text>
                Hello <span class="text-primary">
                        {{this.$store.state.auth.name}}
                      </span>
            </b-nav-text>
            <b-nav-item  @click.prevent="SignOut">Sign Out</b-nav-item>
      </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>

</template>

<script>
import Vue from 'vue';
export default {
    name:'AppMenu',
    methods:{
        SignOut(){
            this.$store.dispatch('logoutUser');
            this.$router.push('/');
            Vue.$toast.open({
                message:'User Loged out successfully',
                type:'success'
            });
        },
    }
}
</script>

<style scoped>
.bg-info.meet-nav{
    background-color: aliceblue !important;
}
</style>