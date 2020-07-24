<template>
  <div>
    <div class="title is-1">Edit</div>
    <div class="control">
      <div class="field">
        <label class="label">Number of Employees</label>
        <div class="control">
          <input
            class="input"
            type="text"
            id="numberOfEmployees"
            v-model="numberOfEmployees"
            name="numberOfEmployees"
          />
        </div>
        <p class="help">This is a help text</p>
      </div>
      <button class="button is-success">Submit</button>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapActions } from 'vuex';

export default {
  name: 'edit-company',
  data() {
    return {
      numberOfEmployees: 2500,
      // company: {},
    };
  },
  computed: {
    id() {
      console.log(this.$route.params.id);
      return this.$route.params.id;
    },
    company() {
      const s = this.getCompanyById(this.id);
      console.log(s);
      return s;
    },
  },
  methods: {
    ...mapMutations(['setNumberEmployees']),
    ...mapActions(['getCompanyById']),
  },
  mounted() {
    // console.log(this.id);
    // const s = this.getCompanyById(this.id).then((res) => {
    //   console.log(res);
    // });
    // console.log(s);
    // console.log('hi');
  },
};
</script>
