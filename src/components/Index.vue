<template>
  <q-layout>
    <div slot="header" class="toolbar">
      <q-toolbar-title :padding="0">
        Despesas em Cash
      </q-toolbar-title>
    </div>
    <div class="container">
      <cc-form></cc-form>
      <hr v-show="list.length > 0">
      <cc-list :list="list"></cc-list>
    </div>
  </q-layout>
</template>

<script>
  import CcForm from './expenses/form.vue'
  import CcList from './expenses/list.vue'
  import { QIcon } from 'quasar'

  export default {
    components: { CcForm, CcList, QIcon },
    data () {
      return {
        list: []
      }
    }
  }
</script>

<style scoped>
  .container {
    padding: 20px;
  }
</style>
