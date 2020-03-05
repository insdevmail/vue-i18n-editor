<template>
  <Modal name="new-project" height="auto">
    <div class="text-center font-semibold text-2xl mb-6">New project configuration</div>
    <CInput v-model="title" placeholder="Project title" />
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
              <CRadio name="isPrimary" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <CFileInput @change="handleFileUpload">Add json file</CFileInput>
    <div class="text-right mt-4">
      <CButton>Create project</CButton>
    </div>
  </Modal>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'PopupNewProject',
  data() {
    return {
      title: null,
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
  },
};
</script>

<style lang="scss" module></style>
