<template>
  <Modal name="new-project" height="auto">
    <div class="text-center font-semibold text-2xl mb-6">New project configuration</div>
    <table class="table mb-4">
      <thead>
        <tr>
          <th class="">Lang</th>
          <th class="">File</th>
          <th class="">Primary</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">English</th>
          <td>C:/path/to/en.json</td>
          <td>
            <CRadio name="isPrimary" />
          </td>
        </tr>
        <tr>
          <th scope="row">Russian</th>
          <td>C:/path/to/ru.json</td>
          <td>
            <CRadio name="isPrimary" />
          </td>
        </tr>
      </tbody>
    </table>
    <CFileInput @change="handleFileUpload">Add json file</CFileInput>
    <div class="text-right mt-4">
      <CButton>Create project</CButton>
    </div>
  </Modal>
</template>

<script>
export default {
  name: 'PopupNewProject',
  methods: {
    handleFileUpload(file) {
      if (file) {
        this.$modal.show('add-language-file');
      }
    },
  },
};
</script>

<style lang="scss" module></style>
