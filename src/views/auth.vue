<template>
	<div class="wrapper auth">
		<div class="h1 auth__title">
			Авторизация
		</div>
		<div class="auth__content">
			<div :class="['auth__steps',loginStep === 'sent' ? 'active': null]">
				<form class="auth__step" @submit.prevent="sendLogin">
					<div class="auth__phone form__control">
						<label class="form__label">Номер телефона</label>
						<input
							class="form__input"
							v-maska
							v-model="loginFormData.phone"
							data-maska="7 ### ###-##-##"
							type="text"
							placeholder="8 (999) 999 - 99 - 99"
						/>
					</div>
					<button class="auth__next btn"></button>
				</form>
				<form class="auth__step" @submit.prevent="sendCode">
					<div class="auth__code form__control">
						<label class="form__label">Код из СМС</label>
						<div class="auth__code--control">
							<input
								v-for="code in 6"
								:key="`code_symbol_${code}`"
								class="form__input h2"
								maxlength="1"
								v-model="loginFormData.code[code - 1]"
								type="text"
							/>
						</div>
					</div>
					<button class="auth__submit btn">Отправить</button>
				</form>
			</div>
		</div>
		<div class="auth__footnote p">
			Зарегестрироваться ?
		</div>
	</div>
</template>

<script>
import {app} from '@/services'

export default {
	name: 'auth',
	data() {
		return {
			template: 'login',
			loginStep: null,
			loginFormData: {
				phone: '',
				code: []
			}
		}
	},
	watch: {
		'loginFormData.code': {
			immediate: true,
			handler(to, from) {
				console.log(to, from)
			},
		}
	},
	methods: {
		sendLogin() {
			const params = {phone: this.loginFormData.phone.replace(/ /g, '').replace(/-/g, '')}
			app.sendPhoneLogin(params).then(data => {
				this.loginStep = data.code;
			}).catch((err) => {
				console.log(err)
			})
		},
		sendCode(){
			const params = {code:this.loginFormData.code.join('') , phone: this.loginFormData.phone.replace(/ /g, '').replace(/-/g, '')}
			app.sendCodeLogin(params).then(data => {
				this.$store.dispatch('setToken', data);
				this.next('restaurant', {id:1})
			}).catch((err) => {
				console.log(err)
			})
		},
		next(name, params = {}) {
			this.$router.push({name, params});
		},
	}
}
</script>
