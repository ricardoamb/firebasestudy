<template>
  <q-layout>
    <div class="toolbar" slot="header">
      <q-toolbar-title :padding="1">
        Autenticação
      </q-toolbar-title>
    </div>
    <div class="layout-view">
      <form class="container" @submit.prevent="submit">
        <div>
          <input type="email" v-model="email" placeholder="E-mail">
        </div>
        <div>
          <input type="password" v-model="password" placeholder="Password">
        </div>
        <div>
          <button type="submit" class="primary">Entrar</button>
        </div>
      </form>
    </div>
  </q-layout>
</template>

<script>
  export default {
    data () {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      submit () {
        const { email, password } = this
        if (email !== '' && password !== '') {
          this.$auth.signInWithEmailAndPassword(email, password)
        }
      }
    },
    mounted () {
      this.$auth.onAuthStateChanged(user => {
        if (user) {
          this.$router.push({ path: '/' })
        }
      })
    }
  }
</script>

<style lang="sass">
form
  padding: 20px
input[type="email"], input[type="password"], .container button
  width: 100%
.container
  div
    margin-bottom: 25px
  div:last-of-type
    margin-bottom: -10px
</style>
