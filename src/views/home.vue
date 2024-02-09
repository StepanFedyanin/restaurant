<template>
	<div class="wrapper home">
		<form class="form" @submit.prevent>
			<div class="form__control">
				<label class="form__label">
					Номер ресторана
				</label>
				<input class="form__input" type="text">
				<button class="btn">Найти</button>
			</div>
		</form>
	</div>
</template>

<script>
export default {
	name: 'home'
}
</script>