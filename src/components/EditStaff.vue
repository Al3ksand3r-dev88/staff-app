<template>
  <div class="edit-wrapper">
    <h1>Redigera användare</h1>
    <form @submit.prevent>
      <input type="text" v-model="employee.name" />
      <input type="text" v-model="employee.role" />
      <input type="text" v-model="employee.phone" />
      <input type="text" v-model="employee.email" />
      <button>Spara</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "EditStaff",
  props: ["employee"]
};
</script>

<style lang="scss" scoped>
.edit-wrapper {
  width: 50%;
  height: 100%;
  display: flex;
  padding: 2rem 0;
  flex-flow: column;
  text-align: center;
  form {
    width: 90%;
    margin: auto;
    display: flex;
    flex-flow: column;

    input,
    button {
      padding: 13px;
      font-size: 18px;
      margin: 0.5rem 0;
      border-radius: 3px;
      border: 1px solid #ccc;
    }

    button {
      width: 200px;
      border: none;
      color: #fff;
      cursor: pointer;
      background: green;
    }
  }
}
</style>
