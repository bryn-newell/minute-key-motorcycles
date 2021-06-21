<script>
export default {
  computed: {
    bikeImage() {
      const imagePath = this.bike && this.bike.image;
      try {
        return require(`@/assets/${imagePath}`);
      } catch (e) {
        return null;
      }
    },
  },
};
</script>
