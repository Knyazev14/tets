<template>
	<select v-model="checkedPipe" class="select">
		<option disabled value="">Выберите из списка</option>
		<option class="select__oprion" v-for="option in pipeList" :value="option" :key="option.id">
			{{ option.name }}
		</option>
	</select>
</template>

<script>

import { mapState } from 'vuex';

export default {
	name: 'pipe-select',
	data() {
		return {

		}
	},
	computed: {
		...mapState({
			pipeList: state => state.pipeList,
			checkedPipe: state => state.checkedPipe,
		}),
		checkedPipe: {
			get() {
				return this.$store.state.checkedPipe
			},
			set(value) {
				this.$store.commit('setCheckedPipe', value)
			}
		},
	},
	methods: {

	}
}
</script>

<style scoped>
.select {
	width: 100%;
	height: 50px;
	font-size: 20px;
	padding: 10px;
	border-radius: 5px;
	margin-bottom: 20px;
}
</style>