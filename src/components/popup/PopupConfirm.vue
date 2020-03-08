<template>
  <Modal name="confirm" height="auto" @before-open="beforeOpen">
    <div class="text-center font-semibold text-2xl mb-6">{{ title }}</div>
    <div class="text-xl" v-html="text" />
    <div class="mt-4 text-right">
      <CButton @click="handleConfirm">Confirm</CButton>
    </div>
  </Modal>
</template>

<script>
export default {
  name: 'PopupConfirm',
  data() {
    return {
      title: null,
      text: null,
      onConfirm: null,
    };
  },
  methods: {
    beforeOpen({ params }) {
      this.title = params.title;
      this.text = params.text;
      this.onConfirm = params.onConfirm;
    },
    handleConfirm() {
      this.onConfirm();
    },
  },
};
</script>

<style lang="scss" module></style>
