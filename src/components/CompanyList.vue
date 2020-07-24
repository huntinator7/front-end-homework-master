<template>
  <div class="card">
    <div class="card-header">
      <div class="card-header-title title is-2">
        {{ company.name }}
      </div>
    </div>
    <div class="card-content">
      <h5 class="title is-5">Company #{{ company.id }}</h5>
      <div class="buttons">
        <router-link :to="'/company/' + company.id" class="button is-info"
          >View Company
        </router-link>
        <router-link :to="'/edit/' + company.id" class="button is-dark">Edit Company</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'company-list',
  props: ['company'],
};
</script>

<style scoped></style>
