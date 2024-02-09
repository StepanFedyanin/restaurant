<template>
	<div class="wrapper">
		<TopBar/>
		<div class="wrapper__content catalog">
			<categoryDish :select="selectCategory" :categories="category" @changeSelect="changeCategory"/>
			<div v-for="category in menu.categorys" :key="`category-${category.id}`" class="catalog__categorys">
				<h2 class="catalog__categorys--title">{{category.category}}</h2>
				<div class="catalog__category">
					<div v-for="dish in category.dish" :key="`dish-${dish.id}`" class="catalog__dish">
						<div class="catalog__dish--image">
							<img :src="dish.image">
						</div>
						<div class="catalog__dish--info">
							{{dish.name}}
							<p>{{dish.price}} <span>₽</span></p>
						</div>
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
			menu: [],
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
			app.getRestaurant(params).then((data)=>{
				console.log(data)
				this.menu = data;
			}).catch((err=>{
				console.log(err)
			}))
		},
		getRestaurantCategory(params){
			app.getRestaurantCategory(params).then((data)=>{
				this.category = data;
				console.log(data)
			}).catch((err=>{
				console.log(err)
			}))
		},
		changeCategory(value){
			this.selectCategory = value
		}
	}
}
</script>