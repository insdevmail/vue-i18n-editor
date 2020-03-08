<template>
  <div id="app">
    <router-view />
    <PopupNewProject />
    <PopupAddLanguageFIle />
    <PopupConfirm />
  </div>
</template>

<script>
import PopupNewProject from './components/popup/PopupNewProject';
import PopupAddLanguageFIle from './components/popup/PopupAddLanguageFIle';
import PopupConfirm from './components/popup/PopupConfirm';

export default {
  components: {
    PopupNewProject,
    PopupAddLanguageFIle,
    PopupConfirm,
  },
};
</script>

<style lang="scss"></style>
