<template>
  <list1></list1>
  <list2 :url="searchURL"></list2>
</template>
<script>
import list1 from './list1.vue';
import list2 from './list2.vue';

export default {
  data: ()=>({
    searchURL
  }),
  components: {
    list1,
    list2
  }
};
</script>