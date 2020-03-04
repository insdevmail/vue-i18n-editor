<template>
  <Modal name="add-language-file" height="auto">
    <div class="text-center font-semibold text-2xl mb-6">Add language</div>
    <CSelect v-model="language" :options="languages" placeholder="Language" />
    <div class="mt-4 text-right">
      <CButton>Add language</CButton>
    </div>
  </Modal>
</template>

<script>
export default {
  name: 'PopupAddLanguageFile',
  data() {
    return {
      language: null,
    };
  },
  computed: {
    languages() {
      return [
        {
          id: 'en',
          value: 'English',
        },
        {
          id: 'ru',
          value: 'Russian',
        },
      ];
    },
  },
};
</script>

<style lang="scss" module></style>
