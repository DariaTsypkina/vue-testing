<template>
  <div>
    <form @submit.prevent>
      <h4>Создание поста</h4>
      <my-input v-focus v-model="post.title" placeholder="Название" />
      <my-input v-model="post.body" placeholder="Описание" />
      <my-button @click="createPost"> Создать </my-button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      post: {
        title: "",
        body: "",
      },
    };
  },
  methods: {
    createPost() {
      this.post.id = Date.now();
      this.$emit("create", this.post);
      this.post = {
        title: "",
        body: "",
      };
    },
  },
  watch: {
    // включаем глубокое отслеживание объекта
    post: {
      handler(newValue) {
        console.log(newValue);
      },
      deep: true,
    },
  },
};
</script>


<style scoped>
form {
  display: flex;
  flex-direction: column;
}

.input {
  width: 100%;
  border: 1px solid teal;
  padding: 10px 15px;
  margin-top: 10px;
}

.btn {
  align-self: flex-end;
  margin-top: 15px;
  padding: 10px 15px;
  background: none;
  color: teal;
  border: 1px solid teal;
}
</style>