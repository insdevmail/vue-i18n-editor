<template>
  <Modal name="add-path" height="auto" @before-open="beforeOpen">
    <ValidationObserver ref="validator" tag="form" @submit.prevent="handleConfirm">
      <div class="text-center font-semibold text-2xl mb-6">Add ID</div>
      <CInput v-model="path" name="path" placeholder="Enter path" rules="required" />
      <div class="mt-4 text-right">
        <CButton type="submit">Add</CButton>
      </div>
    </ValidationObserver>
  </Modal>
</template>

<script>
export default {
  name: 'PopupPath',
  data() {
    return {
      path: null,
      onConfirm: null,
      validatePath: null,
    };
  },
  methods: {
    beforeOpen({ params }) {
      this.onConfirm = params.onConfirm;
      this.validatePath = params.validatePath;
      if (params.path) {
        this.path = `${params.path}.`;
      }
    },
    async handleConfirm() {
      const isValid = await this.$refs.validator.validate();
      if (isValid) {
        const isPathValid = this.validatePath(this.path);
        if (this.path.endsWith('.') || !isPathValid) {
          this.$refs.validator.setErrors({
            path: ['Invalid id'],
          });
          return false;
        }
        this.onConfirm(this.path);
        this.$modal.hide('add-path');
      }
      return false;
    },
  },
};
</script>

<style lang="scss" module></style>
