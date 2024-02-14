<template>
	<div class="wrapper">
		<TopBar class="q-mb-lg"/>
		<div class="catalog__restaurant p q-mb-lg">{{ restaurant.name }} - {{ restaurant.address }}</div>
		<categoryDish class="q-mb-lg" :select="selectCategory" :categories="category" @changeSelect="changeCategory"/>
		<div v-for="restaurant in restaurant.categorys" :key="`category-${restaurant.id}`" class="catalog__categorys q-mb-md">
			<h2 class="h2 q-my-md" :id="restaurant.category" v-scroll-fire="log">{{ restaurant.category }}</h2>
			<div class="catalog__category">
				<div v-for="dish in restaurant.dish" :key="`dish-${dish.id}`" class="catalog__dish" @click="getDish(dish.id)">
					<div class="catalog__dish--info">
						{{ dish.name }}
						<span>{{ dish.price }} ₽</span>
					</div>
					<div class="catalog__dish--image">
						<img :src="dish.image">
					</div>
					<div class="catalog__dish--btn">
						<button class="btn h4" v-if="dish.quantity===0" @click.stop="postAddOrder(dish.id)">Добавить</button>
						<div v-else class="catalog__dish--quantity" @click.stop>
							<button class="catalog__dish--minus"></button>
							{{dish.quantity}}
							<button class="catalog__dish--plus"></button>
						</div>
					</div>
				</div>
			</div>
		</div>
		<dish :dish="selectedDish" :showDish="showDish" @hiddenDish="changeShowDish"/>
	</div>
</template>

<script>
import {app} from '@/services'
import TopBar from "@/components/topBar.vue";
import CategoryDish from "@/components/categoryDish.vue";
import dish from "@/components/dish.vue";

export default {
	name: 'catalog',
	components: {CategoryDish, TopBar, dish},
	data() {
		return {
			selectedDish: null,
			showDish: false,
			restaurant: [],
			category: [],
			selectCategory: null,
			token: null
		}
	},
	created() {
		this.token = this.$store.state.token
		this.getRestaurant(this.$route.params.id)
		this.getRestaurantCategory(this.$route.params.id)
	},
	methods: {
		getRestaurant(params) {
			app.getRestaurant(params).then((data) => {
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
		getDish(id) {
			app.getDish(id).then(data => {
				this.selectedDish = data;
				this.changeShowDish(true);
			}).catch(err => {
				console.log(err)
			})
		},
		postAddOrder(dish_id){
			const params = {
				restaurant:this.$route.params.id,
				dish:dish_id
			}
			app.sendOrderItem(params).then(data=>{
				this.restaurant = data;
			}).catch((err)=>{
				console.log(err)
			})
		},
		changeCategory(value) {
			this.selectCategory = value
		},
		changeShowDish(value) {
			this.showDish = value;
		}
	}
}
</script>
