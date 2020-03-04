<template>
  <div id="app">
    <router-view />
    <PopupNewProject />
    <PopupAddLanguageFIle />
  </div>
</template>

<script>
import PopupNewProject from './components/popup/PopupNewProject';
import PopupAddLanguageFIle from './components/popup/PopupAddLanguageFIle';

export default {
  components: {
    PopupNewProject,
    PopupAddLanguageFIle,
  },
};
</script>

<style lang="scss"></style>
