<template>
	<div class="category">
		<button :class="['category__btn', select===category.category?'category__btn--active':'']" v-for="category in categories" :key="`categoryDish-${category.id}`"
				@click="selectCategory(category.category)">
			{{ category.category }}
		</button>
	</div>
</template>

<script>
export default {
	name: 'categoryDish',
	props: {
		select: {
			type: String,
			default() {
				return ''
			}
		},
		categories: {
			type: Array,
			default() {
				return []
			}
		}
	},
	methods: {
		selectCategory(value) {
			this.$emit('changeSelect', value)
		}
	}
}
</script>
