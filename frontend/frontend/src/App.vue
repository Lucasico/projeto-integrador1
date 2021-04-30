<template>
  <div class="containerAPP">
    <Haed />
    <router-view />
  </div>
</template>

<script>
import Haed from './components/Head';

export default {
  name: "App",

  components: { Haed },

  data: () => ({
    //
  }),
};
</script>

<style>
body {
  background: #393939;
  margin: 0;
  display: flex;
  flex-direction: column;
}
</style>