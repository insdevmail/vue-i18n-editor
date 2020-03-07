export default {
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
    to: {
      type: String,
      required: false,
      default: null,
    },
    tag: {
      type: String,
      required: false,
      default: 'button',
    },
    color: {
      type: String,
      required: false,
      default: 'primary',
      validation: value => ['primary', 'danger', 'warning', 'success', 'info'].includes(value),
    },
    size: {
      type: String,
      required: false,
      default: 'regular',
      validation: value => ['regular', 's', 'l', 'xl'].includes(value),
    },
    fullWidth: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
      required: false,
      default: null,
    },
    type: {
      type: String,
      default: 'button',
    },
  },
  computed: {
    component() {
      if (this.to) {
        return 'router-link';
      }
      if (this.$attrs.href) {
        return 'a';
      }
      return 'button';
    },
    classes() {
      const array = [
        this.$style[`button--color-${this.color}`],
        this.$style[`button--size-${this.size}`],
      ];
      if (this.fullWidth) array.push(this.$style['button--fullwidth']);
      if (this.isLink && this.isDisabled) array.push(this.$style.disabled);
      return array;
    },
    isLink() {
      return Boolean(this.$attrs.href || this.to);
    },
    isDisabled() {
      return this.loading || this.$attrs.disabled;
    },
  },
  methods: {
    handleClick(e) {
      const { href } = this.$attrs;
      if (href && /^http(s)?:\/\//.test(href)) {
        e.preventDefault();
        window.open(href, '_blank', 'noopener noreferrer');
      }
    },
  },
};
