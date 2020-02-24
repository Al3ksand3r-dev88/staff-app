<template>
  <div class="employee-details">
    <h1>Detaljer</h1>
    <img :src="require('../assets/placeholder.jpg')" />
    <h1>
      {{ employee.name }}
    </h1>
    <h3>{{ employee.role }}</h3>
    <ul>
      <li><i class="fas fa-phone-alt"></i>{{ employee.phone }}</li>
      <li><i class="fas fa-at"></i>{{ employee.email }}</li>
    </ul>
    <router-link
      class="edit"
      :to="{ name: 'edit-employee', params: { id: employee.id, employee } }"
      >Redigera användare <i class="fas fa-pen"></i
    ></router-link>
  </div>
</template>

<script>
export default {
  name: "StaffDetail",
  props: ["employee"]
};
</script>

<style lang="scss" scoped>
.employee-details {
  width: 50%;
  padding: 2rem;
  text-align: center;

  img {
    width: 150px;
    height: 150px;
    display: block;
    margin: 2rem auto;
    border-radius: 50%;
  }

  a.edit {
    cursor: pointer;
    display: block;
    color: green;
    margin-top: 4rem;
  }

  h3 {
    color: #999;
    margin: 1rem 0;
    font-weight: bolder;
  }

  ul {
    width: 80%;
    display: block;
    list-style: none;
    text-align: right;
    margin: 4rem auto 2rem auto;

    li {
      display: flex;
      margin: 2rem 0;
      font-size: 1.3rem;
      align-items: center;

      i {
        margin-right: 1rem;
        font-size: 1.5rem;
      }
    }
  }
}
</style>
