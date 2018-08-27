<template>
  <검색바 :onClickSearch="onClickSearch"></검색바>
  <div
     v-for="item in listData"
  >
    {{item}}
  </div>
</template>

<script>
export default {
  name: 'list2',
  props: {
    url: String
  },
  data: ()=>({
    listData: []
  })
  methods: {
    onClickSearch() {
      axios.get(this.url)
        .then(res => {
          this.listData = res;
        })
    }
  }
};
</script>