<template>
  <div :class="[$style['item']]" class="py-2 px-3">
    <div :class="[$style['item__title']]">{{ item.id }}</div>
    <div v-for="language in item.languages" :key="language.lang" :class="[$style['item__row']]">
      <div :class="[$style['item__lang']]" class="text-sm pr-2">{{ language.lang }}</div>
      <CInput
        v-model="language.content"
        :class="[$style['item__input']]"
        :name="language.lang"
        @input="$emit('input', $event, language.lang, item.id)"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'TranslationItem',
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" module>
.item {
  border-bottom: 1px solid theme('colors.gray.800');
  &__title {
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 10px;
    padding-left: 50px;
  }

  &__row {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }

  &__lang {
    width: 50px;
  }

  &__input {
    margin-bottom: 0 !important;
  }
}
</style>
