<template>
  <div class="wrapper">
    <TopBar class="q-mb-lg"/>
    <div class="catalog__restaurant p q-mb-lg">{{ restaurant.name }} - {{ restaurant.address }}</div>
    <categoryDish class="q-mb-lg" :select="selectCategory" :categories="category" @changeSelect="changeCategory"/>
    <div v-for="restaurant in restaurant.categorys" :key="`category-${restaurant.id}`" class="catalog__categorys q-mb-md">
      <h2 class="h2 q-my-md" :id="restaurant.category">{{ restaurant.category }}</h2>
      <div class="catalog__category">
        <div v-for="dish in restaurant.dish" :key="`dish-${dish.id}`" class="catalog__dish">
          <div class="catalog__dish--info">
            {{ dish.name }}
            <span>{{ dish.price }} ₽</span>
          </div>
          <div class="catalog__dish--image">
            <img :src="dish.image">
          </div>
          <div class="catalog__dish--btn">
            <button class="btn h4">Добавить</button>
          </div>
        </div>
      </div>
    </div>
    <Navbar/>
  </div>
</template>

<script>
import {app} from '@/services'
import Navbar from "@/components/navbar.vue";
import TopBar from "@/components/topBar.vue";
import CategoryDish from "@/components/categoryDish.vue";

export default {
  name: 'catalog',
  components: {CategoryDish, Navbar, TopBar},
  data() {
    return {
      restaurant: [],
      category: [],
      selectCategory: null
    }
  },
  created() {
    this.getRestaurant(this.$route.params.id)
    this.getRestaurantCategory(this.$route.params.id)
  },
  methods: {
    getRestaurant(params) {
      app.getRestaurant(params).then((data) => {
        console.log(data)
        this.restaurant = data;
      }).catch((err => {
        console.log(err)
      }))
    },
    getRestaurantCategory(params) {
      app.getRestaurantCategory(params).then((data) => {
        this.category = data;
        this.selectCategory = data[0].category
        console.log(data)
      }).catch((err => {
        console.log(err)
      }))
    },
    changeCategory(value) {
      this.selectCategory = value
    }
  }
}
</script>
