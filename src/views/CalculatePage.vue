<template>
	<div class="calc">
		<div class="calc__container">
			<div class="calc__body">
				<div class="calc__top top-calc">

					<h6 class="top-calc__title">ЛИСТЫ ПОКРЫТИЯ:</h6>
					<select v-model="section" @change="changeOption" class="top-calc__material">
						<option disabled value="">Выберите из списка</option>
						<option class="top-calc__material-option" v-for="material in materialList" :value="material"
							:key="material.id">
							{{ material.name }} {{ material.material }}
						</option>
					</select>

					<h6 class="top-calc__title">ТРУБЫ:</h6>
					<select v-model="sectionPipe" @change="pipeLength" class="top-calc__material">
						<option disabled value="">Выберите из списка</option>
						<option class="top-calc__material-option" v-for="material in pipeList" :value="material"
							:key="material.material">
							{{ material.name }}
						</option>
					</select>

					<h6 class="top-calc__title">ШИРИНА:</h6>
					<input v-model.number="inputWidth" @input="calcTotalSqure" step="1" :min="`${minMaxWidth.min}`"
						:max="`${minMaxWidth.max}`" class="top-calc__range" type="range">
					<span>{{ this.inputWidth }}</span>

					<h6 class="top-calc__title">ДЛИННА:</h6>
					<input v-model.number="inputLength" @input="calcTotalSqure" step="1" :min="`${minMaxLength.min}`"
						:max="`${minMaxLength.max}`" class="top-calc__range" type="range">
					<span>{{ this.inputLength }}</span>

					<select v-model="durabulity" class="top-calc__material">
						<option disabled value="">Выберите из списка</option>
						<option class="top-calc__material-option" v-for="material in durabilityList" :value="material"
							:key="material.material">
							{{ material.name }}
						</option>
					</select>

				</div>
				<div class="calc__bottom bottom-calc">
					<div><span class="bottom-calc__title">Общая площадь:</span>
						<span class="bottom-calc__totalsquere">
							{{ this.totalSqure }} м2
						</span>
					</div>
					<div><span class="bottom-calc__title">Площадь секции:</span>
						<span class="bottom-calc__totalsquere">
							{{ this.sectionSqure }} м2
						</span>
					</div>
					<div> <span class="bottom-calc__title">Количество листов:</span>
						<span class="bottom-calc__totalsquere">
							{{ this.sectionQuantity }} шт.
						</span>
					</div>
					<div> <span class="bottom-calc__title">Стоимость листов:</span>
						<span class="bottom-calc__totalsquere">
							{{ this.listPrice }} руб
						</span>
					</div>
					<div> <span class="bottom-calc__title">Саморезов:</span>
						<span class="bottom-calc__totalsquere">
							{{ this.totalScrew }} шт.
						</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

import dataJson from '@/bd/data.json'
import dataConfig from '@/bd/config.json'

export default {
	data() {
		return {
			dataJson,
			dataConfig,
			materialList: [],
			pipeList: [],
			durabilityList: [],
			inputLength: 5,
			inputWidth: 5,
			totalSqure: 100,
			section: '',
			sectionSqure: 1,
			sectionQuantity: 100,
			allSize: [],
			minMaxWidth: '',
			minMaxLength: '',
			listPrice: 625,
			sectionPipe: '',
			durabulity: '',
			screwMetal: '',
			screwPlastic: '',
			totalScrew: 10
		}
	},
	methods: {
		getMaterialList() {
			this.materialList = this.dataJson.filter(typeList => typeList.type === 'list')
			this.materialList = this.materialList.map((materialItem) => ({
				id: Date.now(),
				material: materialItem.material,
				name: materialItem.name,
				price: materialItem.price,
				width: materialItem.width,
			}))
		},

		calcScrewPlastic() {
			this.totalScrew = Math.ceil(this.totalSqure / this.screwPlastic.value)
		},

		calcScrewMetal() {
			this.totalScrew = Math.ceil(this.totalSqure / this.screwMetal.value) 
		},

		getPipe() {
			this.pipeList = this.dataJson.filter(typePipe => typePipe.type === 'pipe')
		},

		getScrews() {
			this.screwMetal = this.dataConfig.filter(typeFix => typeFix.type === 'fix' && typeFix.key === 'metal')[0]
			this.screwPlastic = this.dataConfig.filter(typeFix => typeFix.type === 'fix' && typeFix.key === 'plastic')[0]
		},

		getDurability() {
			this.durabilityList = this.dataConfig.filter(typeDurability => typeDurability.type === 'frame')
		},

		calcTotalSqure() {
			this.totalSqure = this.inputWidth * this.inputLength
			if (this.section.material === 'plastic') {
				this.calcScrewPlastic()
			}
			if (this.section.material === 'metal') {
				this.calcScrewMetal()
			}
			this.calcSectionQuantity()
		},

		changeOption(event) {
			this.sectionSqure = 1 * this.section.width
			this.$emit('update:modelValue', event.target.value)
			if (this.section.material === 'plastic') {
				this.calcScrewPlastic()
			}
			if (this.section.material === 'metal') {
				this.calcScrewMetal()
			}
			this.calcSectionQuantity()
		},

		calcSectionQuantity() {
			this.sectionQuantity = Math.ceil(this.totalSqure / this.sectionSqure)
			if (this.section.price) {
				this.listPrice = this.section.price * this.sectionQuantity
			} else {
				this.listPrice = 25 * this.sectionQuantity
			}
		},

		getMinMax() {
			this.minMaxWidth = this.dataConfig.filter(typeKey => typeKey.key === 'width')[0]
			this.minMaxLength = this.dataConfig.filter(typeKey => typeKey.key === 'length')[0]
		},
	},
	mounted() {
		this.getMaterialList()
		this.getPipe()
		this.getDurability()
		this.getMinMax()
		this.getScrews()
	}
}
</script>
<style>
body {
	background: teal;
	color: white;
	padding: 40px;
}

.top-calc__material {
	width: 100%;
	height: 50px;
	font-size: 20px;
	padding: 10px;
	border-radius: 5px;
	margin-bottom: 20px;
}

.top-calc__title {
	margin-bottom: 10px;
}

.bottom-calc__title {
	margin-right: 10px;
}

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