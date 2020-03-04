<template>
  <Modal name="new-project">
    <div class="text-center font-semibold text-2xl mb-6">New project configuration</div>
    <table class="table">
      <thead>
        <tr>
          <th class="">Lang</th>
          <th class="">Path</th>
          <th class="">Primary</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">English</th>
          <td>C:/path/to/file.json</td>
          <td>Otto</td>
        </tr>
      </tbody>
    </table>
  </Modal>
</template>

<script>
export default {
  name: 'PopupNewProject',
};
</script>

<style lang="scss" module></style>
