<template>
  <div class="navbar">
    <div @click="$router.push('/')">App</div>
    <div class="navbar__btns">
      <my-button @click="$router.push('/posts')" class="btn">Посты</my-button>
      <my-button @click="$router.push('/about')">Об этом сайте</my-button>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style scoped>
.navbar {
  display: flex;
  align-items: center;
  height: 50px;
  padding: 0 15px;
  background-color: rgb(199, 198, 198);
  box-shadow: 2px 2px 4px gray;
}
.navbar__btns {
  margin-left: auto;
}
.btn:first-child {
  margin-right: 20px;
}
</style>