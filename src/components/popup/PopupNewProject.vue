<template>
  <Modal name="new-project" height="auto">
    <div class="text-center font-semibold text-2xl mb-6">New project configuration</div>
    <ValidationObserver ref="validator" tag="form" @submit.prevent="handleSubmit">
      <CInput v-model="title" name="title" placeholder="Project title" rules="required" />
      <div v-if="files.length > 0">
        <table class="table mb-4">
          <thead>
            <tr>
              <th class="">Lang</th>
              <th class="">File</th>
              <th class="">Primary</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in files" :key="item.id">
              <th scope="row">{{ item.langLabel }}</th>
              <td>{{ item.path }}</td>
              <td>
                <CRadio v-model="primary" name="primary" :value="item.lang" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <CFileInput accept="application/json" @change="handleFileUpload">Add json file</CFileInput>
      <div class="text-right mt-4">
        <CButton type="submit">Create project</CButton>
      </div>
    </ValidationObserver>
  </Modal>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex';

export default {
  name: 'PopupNewProject',
  data() {
    return {
      title: null,
      primary: null,
    };
  },
  computed: {
    ...mapGetters({
      files: 'project/files',
    }),
  },
  methods: {
    ...mapActions({
      addFileToProject: 'project/addFileToProject',
    }),
    ...mapMutations({
      setProject: 'project/setProject',
    }),
    handleFileUpload(file) {
      if (file) {
        this.$modal.show('add-language-file', {
          onConfirm: lang => {
            this.addFileToProject({
              file,
              lang,
            });
          },
        });
      }
    },
    async handleSubmit() {
      const isValid = await this.$refs.validator.validate();
      if (isValid && this.files.length > 1) {
        this.setProject({
          title: this.title,
          primary: this.primary,
        });
        await this.$router.push('/project');
        this.$modal.hide('new-project');
      }
    },
  },
};
</script>

<style lang="scss" module></style>
