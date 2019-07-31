<template>
  <div class="home">
    <p>{{ getBook }}</p>
    <p>{{ getFullPath }}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: "home",
  components: {
  },
  watch: {
    '$route' (to) {
      let bookId = to.params.bookId;
      let fullPath = to.query.fullPath;
      this.$store.dispatch('setBook', {bookId: bookId, fullPath: fullPath});
    }
  },
  computed: {
    ...mapGetters(['getBook', 'getFullPath'])
  },
  created() {
    let bookId = this.$route.params.bookId;
    let fullPath = this.$route.query.fullPath;
    this.$store.dispatch('setBook', {bookId: bookId, fullPath: fullPath});
  },
};
</script>
