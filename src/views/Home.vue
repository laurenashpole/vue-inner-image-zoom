<template>
  <div>
    <HomeProduct />
    <HomeQuickStart />
  </div>
</template>

<script>
import HomeProduct from '@/components/HomeProduct.vue';
import HomeQuickStart from '@/components/HomeQuickStart.vue';

export default {
  name: 'Home',
  components: {
    HomeProduct,
    HomeQuickStart
  }
};
</script>
