import { createStore } from 'vuex'
import dataJson from '@/bd/data.json'
import dataConfig from '@/bd/config.json'


export default createStore({
	state: () => ({
		dataJson,
		dataConfig,
		materialList: [],
		pipeList: [],
		checkedPipe: '',
		durabilityList: [],
		inputLength: 5,
		inputWidth: 5,
		totalSqure: 100,
		sectionList: '',
		sectionSqure: 1,
		sectionQuantity: 100,
		allSize: [],
		minMaxWidth: '',
		minMaxLength: '',
		listPrice: 625,
	}),

	getters: {

	},

	mutations: {
		setMaterialList(state, data) {
			state.materialList = data
		},
		setPipeList(state, data) {
			state.pipeList = data
		},
		setDurabilityList(state, data) {
			state.durabilityList = data
		},
		setMinMaxWidth(state, data) {
			state.minMaxWidth = data
		},
		setMinMaxLength(state, data) {
			state.minMaxLength = data
		},
		setSectionList(state, data) {
			state.sectionList = data
		},
		setCheckedPipe(state, data) {
			state.checkedPipe = data
		},
		setInputWidth(state, data) {
			state.inputWidth = data
		},
		setInputLength(state, data) {
			state.inputLength = data
		},
	},


	actions: {
		setMaterialList({ state, commit }) {
			commit('setMaterialList', state.dataJson.filter(typeList => typeList.type === 'list'))
			commit('setMaterialList', state.materialList.map((materialItem) => ({
				id: Date.now(),
				material: materialItem.material,
				name: materialItem.name,
				price: materialItem.price,
				width: materialItem.width,
			})))
		},
		setPipeList({ state, commit }) {
			commit('setPipeList', state.dataJson.filter(typePipe => typePipe.type === 'pipe'))
		},
		setDurabilityList({ state, commit }) {
			commit('setDurabilityList', state.dataConfig.filter(typeDurability => typeDurability.type === 'frame'))
		},
		setMinMaxWidth({ state, commit }) {
			commit('setMinMaxWidth', state.dataConfig.filter(typeKey => typeKey.key === 'width')[0])
		},
		setMinMaxLength({ state, commit }) {
			commit('setMinMaxLength', state.dataConfig.filter(typeKey => typeKey.key === 'length')[0])
		},
	},


	modules: {

	}
})
