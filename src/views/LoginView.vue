<template>
    <div>

       
        <section class="forms">
                <br>

                <form class="register">
                    <h2>Register</h2>
                    
                    <input type="email"
                     placeholder="Enter email"
                     >
                     <!-- v-model="register_form.email" -->
                    
                    <input type="password"
                    placeholder="password"
                    >
                    <!-- v-model="register_form.password" -->

                    <input 
                    type="submit" 
                    value="Register">

                </form>
                <br>
                <br>
                <form class="login">
                      <h2>Login</h2>
                    
                    <input type="email"
                     placeholder="Enter email"
                     >
                     <!-- v-model="login_form.email" -->
                    
                    <input type="password"
                    placeholder="password"
                    >
                    <!-- v-model="login_form.password" -->

                    <input 
                    type="submit" 
                    value="Login">
                </form>

            </section>

    </div>
</template>


<script>
// import { ref } from 'vue'
// import { useStore } from 'vue'


export default {
    name:"LoginView",
    // setup (){
    //     const login_form = ref({});
    //     const register_form = ref({});
    //     const store = useStore();

    //     return {
    //         login_form,
    //         register_form,
    //         store
    //     }
    // }
    
}
</script>