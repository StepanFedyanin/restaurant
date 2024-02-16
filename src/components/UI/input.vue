<template>
	<div class="form__control">
		<label v-if="label" class="form__label">{{label}}</label>
		<input
			class="form__input classInput"
			v-maska
			:data-maska="maska"
			type="text"
			:placeholder="placeholder"
			:value="inputValue"
			@input="change($event.target.value)"
			required
		/>
	</div>
</template>

<script>
export default {
	name: 'ui-input',
	props:{
		label:{
			type: String,
			default(){
				return null
			}
		},
		maska:{
			type: String,
			default(){
				return null
			}
		},
		classInput:{
			type: String,
			default(){
				return null
			}
		},
		placeholder:{
			type: String,
			default(){
				return null
			}
		},
		modelValue:{
			type: String
		},
		required:{
			type: Boolean,
			default(){
				return false
			}
		}
	},
	data(){
		return{
			inputValue: this.modelValue
		}
	},
	methods:{
		change(value){
			this.inputValue = value;
			this.$emit('update:modelValue', this.inputValue)
		}
	}
}
</script>
