<template>
	<input  class="top-calc__range" type="range">
</template>

<script>

import { mapState } from 'vuex';

export default {
	name: 'range-input',
	data() {
		return {

		}
	},
	computed: {
	},
	methods: {

	}
}
</script>

<style scoped>
.top-calc__range {
	width: 50%;
	margin-right: 5px;
	margin-bottom: 20px;
}

input[type=range]::-webkit-slider-runnable-track {
	border-radius: 10px/100%;
	background-color: #fff;
}
</style>