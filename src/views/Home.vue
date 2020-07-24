<template>
  <div class="container">
    <h1 class="title is-1">Our Companies</h1>
    <div class="companylist">
      <company-list v-for="company in companies" :key="company.id" :company="company" />
    </div>
  </div>
</template>

<script>
import CompanyList from '@/components/CompanyList.vue';
import { mapActions, mapState } from 'vuex';

export default {
  name: 'home',
  components: {
    CompanyList,
  },
  computed: mapState({
    companies: (state) => state.companies,
  }),
  methods: {
    ...mapActions(['fetchCompanies']),
  },
  mounted() {
    this.fetchCompanies();
    console.log('hi');
  },
};
</script>

<style scoped>
.companylist {
  padding: 20px;
}

.companylist > .card {
  margin-bottom: 20px;
}
</style>
