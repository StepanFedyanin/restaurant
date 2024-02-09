<template>
	<div class="topbar">
		<div class="topbar__header">
			<p class="topbar__user h1">Привет, {{ name }}</p>
			<button class="topbar__burger">
				<span></span>
			</button>
		</div>
		<div>
			<button>Доставка</button>
			<button>Самовывоз</button>
		</div>
		<div class="topbar__menu">
			<div class="topbar__head">
				<p class="topbar__title">
					Настройки
				</p>
				<button class="topbar__burger active">
					<span></span>
				</button>
			</div>
			<ul class="topbar__list">
				<li v-for="item in menuList" :key="item.link" :class="['topbar__item', item.icon]">{{item.title}}</li>
			</ul>
			О нас
		</div>
	</div>
</template>

<script>
export default {
	name: 'topbar',
	data() {
		return {
			menuList: [
				{
					icon: 'main',
					link: 'main',
					title: 'Главная'
				},
				{
					icon: 'profile',
					link: 'profile',
					title: 'Профиль'
				},
				{
					icon: 'orders',
					link: 'orders',
					title: 'Мои заказы'
				}
			]
		}
	}
}
</script>