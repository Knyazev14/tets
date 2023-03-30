<template>
	<select v-model="sectionList" class="select">
		<option disabled value="">Выберите из списка</option>
		<option class="select__oprion" v-for="option in materialList" :value="option" :key="option.id">
			{{ option.name }}
		</option>
	</select>
</template>

<script>

import { mapState } from 'vuex';

export default {
	name: 'material-select',
	data() {
		return {

		}
	},
	computed: {
		...mapState({
			materialList: state => state.materialList,
			sectionList: state => state.sectionList
		}),
		sectionList: {
			get() {
				return this.$store.state.sectionList
			},
			set(value) {
				console.log(this.$store.state.sectionList)
				this.$store.commit('setSectionList', value)
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