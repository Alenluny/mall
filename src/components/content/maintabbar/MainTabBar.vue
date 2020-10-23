<template>
  <div>
    <tab-bar>
      <tab-bar-item path="/home" activeColor="deeppink">
        <img slot="item-icon" src="@/assets/img/tabbar/首页.svg" alt="" />
        <img
          slot="item-icon-active"
          src="@/assets/img/tabbar/首页-fill.svg"
          alt=""
        />
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category" activeColor="deeppink">
        <img slot="item-icon" src="@/assets/img/tabbar/搜索类目.svg" alt="" />
        <img
          slot="item-icon-active"
          src="@/assets/img/tabbar/搜索类目-fill.svg"
          alt=""
        />
        <div slot="item-text">类目</div>
      </tab-bar-item>
      <tab-bar-item path="/cart" activeColor="deeppink">
        <img slot="item-icon" src="@/assets/img/tabbar/购物车.svg" alt="" />
        <img
          slot="item-icon-active"
          src="@/assets/img/tabbar/购物车-fill.svg"
          alt=""
        />
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile" activeColor="deeppink">
        <img slot="item-icon" src="@/assets/img/tabbar/用户.svg" alt="" />
        <img
          slot="item-icon-active"
          src="@/assets/img/tabbar/用户-fill.svg"
          alt=""
        />
        <div slot="item-text">用户</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from '@/components/common/tabbar/TabBar.vue'
import TabBarItem from '@/components/common/tabbar/TabBarItem.vue'
export default {
  name: 'MainTabBar',
  components: {
    TabBar,
    TabBarItem,
  },
}
</script>

<style lang="scss" scoped></style>
