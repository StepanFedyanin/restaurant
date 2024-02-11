<template>
  <div :class="['dish', showDish?'active':null]" @click="hiddenDish">
    <div class="dish__wrapper" @click.stop>
      <div class="dish__drop"></div>
      <div class="dish__content">
        <div class="dish__cover">
          <img
            :src="dish.image"
            alt=""/>
        </div>
        <div class="dish__info">
          <span>{{dish.name}}</span>
          {{250}} г
        </div>
        <div class="dish__description p">
          {{dish.description}}
        </div>
      </div>
      <button class="dish__btn btn">Добавить <span>{{dish.price}} р</span></button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'dish',
  props:{
    showDish:{
      type: Boolean,
      default() {
        return false
      }
    },
    dish: {
      type: Object,
      default () {
        return null
      }
    },

  },
  methods: {
    hiddenDish () {
      this.$emit('hiddenDish', false)
    }
  }
}
</script>
