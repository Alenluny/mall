<template>
  <div class="recommends">
    <div
      v-for="(item, index) in recommends"
      class="recommend-item"
      :key="index"
    >
      <a :href="item.link">
        <img :src="item.image" alt="" />
        <div>{{ item.title }}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RecommendView',
  props: {
    recommends: {
      type: Array,
      default() {
        return []
      },
    },
  },
}
</script>

<style lang="scss" scoped>
.recommends {
  display: flex;
  width: 100%;
  text-align: center;
  font-size: 12px;

  padding: 10px 0 20px;
  border-bottom: 10px solid rgb(212, 212, 212);
}
.recommend-item {
  flex: 1;
}
.recommend-item img {
  width: 80%;
  height: 80%;
  margin-bottom: 10px;
}
</style>
