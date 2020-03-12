<template>
  <div class="employee-container">
    <ul class="employee-list">
      <h1>Anställda</h1>
      <router-link
        class="employee-item"
        v-for="employee in employees"
        :key="employee.id"
        :to="{
          name: 'employee-details',
          params: { id: employee.id, employee }
        }"
      >
        <img :src="require('../assets/placeholder.jpg')" />
        {{
        employee.name
        }}
      </router-link>
    </ul>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "Home",
  computed: {
    employees() {
      return this.$store.state.employees;
    }
  }
};
</script>

<style lang="scss">
.employee-container {
  width: 100%;
  margin: auto;
  height: 800px;
  display: flex;
  max-width: 960px;
  border-radius: 3px;
  border: 1px solid #eee;
  box-shadow: 0 0 6px rgba(#000, 0.1);
  .employee-list {
    width: 50%;
    height: 100%;
    padding: 2rem;
    background: #eee;

    h1 {
      text-align: center;
      margin-bottom: 2rem;
    }

    .employee-item {
      display: flex;
      color: #000;
      padding: 1rem 0;
      font-size: 1.3rem;
      font-weight: bolder;
      align-items: center;
      text-decoration: none;
      border-bottom: 1px solid #ccc;
      img {
        width: 50px;
        height: 50px;
        margin-right: 2rem;
        border-radius: 50%;
      }
    }
  }
}
</style>
