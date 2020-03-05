<template>
  <Modal name="add-language-file" height="auto" @before-open="beforeOpen">
    <div class="text-center font-semibold text-2xl mb-6">Add language</div>
    <CSelect v-model="language" :options="languages" placeholder="Language" />
    <div class="mt-4 text-right">
      <CButton @click="handleAddButton">Add language</CButton>
    </div>
  </Modal>
</template>

<script>
import languagesList from '../../static/system/languages';

export default {
  name: 'PopupAddLanguageFile',
  data() {
    return {
      language: null,
      onConfirm: null,
    };
  },
  computed: {
    languages() {
      return Object.keys(languagesList).map(el => ({
        id: el,
        value: languagesList[el],
      }));
    },
  },
  methods: {
    handleAddButton() {
      this.onConfirm(this.language);
      this.$modal.hide('add-language-file');
    },
    beforeOpen(e) {
      this.onConfirm = e.params.onConfirm;
    },
  },
};
</script>

<style lang="scss" module></style>
