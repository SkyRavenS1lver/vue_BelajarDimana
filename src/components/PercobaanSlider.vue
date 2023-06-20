
<template>
  <div class="range_container ">
    <h1 class="mb-[1rem] text-lg ">Filters</h1>
    <p class="mb-[2rem] mx-[5%] text-left ">Rentang Harga</p>

      <!-- kurang pop up value, min max buang aja kalo pop up bisa ditambahin -->
      <div class="sliders_control mx-[3rem]">
          <input  id="fromSlider" type="range" v-model="minValue" min="100000" max="10000000"/>
          <input  id="toSlider" type="range" v-model="maxValue" min="100000" max="10000000"/>
      </div>

      <div class="form_control class mx-[5%]">
          <div class="form_control_container">
              <div class="form_control_container__time text-left text-black ">Min</div>
              <input ref="input" class="form_control_container__time__input"  type="number" id="fromInput"  v-model="minValue" min="100000" max="10000000"/>
          </div>
          <div class="form_control_container">
              <div class="form_control_container__time text-left text-black  ">Max</div>
              <input class="form_control_container__time__input" type="number" id="toInput" v-model="maxValue" min="100000" max="10000000"/>
          </div>
      </div>

      <div class=" mx-[5%]" v-if="$route.fullPath == '/'">
        <p class="mb-[1rem] mt-[2rem] text-left ">Tipe Kelas</p>
        <div class="flex shadow-sm " role="group">
          <button id="semua" :class="{active:activeList2[0]}" @click="Active2(0)" value="semua" type="button" class="rounded-lg px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 ">
            Semua
          </button>
          <button id="online" :class="{active:activeList2[1]}" @click="Active2(1)" value="online" type="button" class="rounded-lg mx-[1rem] px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 ">
            Online
          </button>
          <button id="tatap_muka" :class="{active:activeList2[2]}" @click="Active2(2)" value="tatap_muka" type="button" class="rounded-lg px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900  ">
            Tatap Muka
          </button>
        </div>
      </div>

      <div class=" mx-[5%]">
        <p class="mb-[1rem] mt-[2rem] text-left ">Jumlah Pertemuan per Pekan</p>
        <div class="flex shadow-sm " role="group" ref="pertemuanPekan">
          <button type="button" :class="{active:activeList[0]}" @click="Active(0)" class="btns rounded-lg px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 ">
            Semua
          </button>
          <button type="button" :class="{active:activeList[1]}" @click="Active(1)" class="btns rounded-lg mx-[1rem] px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 ">
            1x
          </button>
          <button type="button" :class="{active:activeList[2]}" @click="Active(2)" class="btns rounded-lg mr-[1rem] px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 ">
            2x
          </button>
          <button type="button" :class="{active:activeList[3]}" @click="Active(3)" class="btns rounded-lg px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 ">
            3x
          </button>
          <button type="button" :class="{active:activeList[4]}" @click="Active(4)" class="btns rounded-lg mx-[1rem] px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 ">
            4x
          </button>
          <button type="button" :class="{active:activeList[5]}" @click="Active(5)" class="btns rounded-lg mr-[1rem] px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 ">
            5x
          </button>
          <button type="button" :class="{active:activeList[6]}" @click="Active(6)" class="btns rounded-lg mr-[5%] px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 ">
            6x
          </button>
        </div>
      </div>

      <div v-if="dataProv.length>0" class=" mx-[5%]">
        <p class="mb-[1rem] mt-[2rem] text-left ">Provinsi</p>
        <div class="flex shadow-sm " role="group">
          <button type="button" :class="{active:activeList3[0]}" @click="Active3(0)" class="btns mr-[1rem] rounded-lg px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 ">
            Semua
          </button>
          <template v-for="(prov, index) in dataProv" :key="dataProv">
            <button type="button" :class="{active:activeList3[index+1]}" @click="Active3(index+1)" class="btns mr-[1rem] rounded-lg px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 ">
              {{ prov.provinsi }}
            </button>
          </template>
        </div>
      </div>

      <div v-if="dataKab.length>0" class=" mx-[5%]">
        <p class="mb-[1rem] mt-[2rem] text-left ">Kabupaten</p>
        <div class="flex shadow-sm " role="group">
          <button type="button" :class="{active:activeList4[0]}" @click="Active4(0)" class="btns mr-[1rem] rounded-lg px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 ">
            Semua
          </button>
          <template v-for="(kab, index) in dataKab" :key="dataKab">
            <button type="button" :class="{active:activeList4[index+1]}" @click="Active4(index+1)" class="btns mr-[1rem] rounded-lg px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 ">
              {{ kab.kabupaten }}
            </button>
          </template>
        </div>
      </div>

      <div v-if="dataKec.length>0" class=" mx-[5%]">
        <p class="mb-[1rem] mt-[2rem] text-left ">Kecamatan</p>
        <div class="flex shadow-sm " role="group">
          <button type="button" :class="{active:activeList5[0]}" @click="Active5(0)" class="btns mr-[1rem] rounded-lg px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 ">
            Semua
          </button>
          <template v-for="(kec, index) in dataKec" :key="dataKec">
            <button type="button" :class="{active:activeList5[index+1]}" @click="Active5(index+1)" class="btns mr-[1rem] rounded-lg px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 ">
              {{ kec.kecamatan }}
            </button>
          </template>
        </div>
      </div>

      <div class="flex items-center justify-between flex-wrap mt-[2rem] mx-[5%] ">
        <a @click="resets" class="underline hover:font-bold">Bersihkan Semua</a>

        <button @click="submits" class='border-black text-white bg-black px-4 py-3 rounded-xl text-sm font-medium hover:bg-white hover:text-black hover:border-2 hover:border-black'>
          Tampilkan Hasil
        </button>
      </div>


  </div>
</template>
<script>

function controlFromInput(fromSlider, fromInput, toInput, controlSlider) {
  const [from, to] = getParsed(fromInput, toInput);
  fillSlider(fromInput, toInput, '#C6C6C6', '#25daa5', controlSlider);
  if (from > to) {
      fromSlider.value = to;
      fromInput.value = to;
  } else {
      fromSlider.value = from;
  }
}
  
function controlToInput(toSlider, fromInput, toInput, controlSlider) {
  const [from, to] = getParsed(fromInput, toInput);
  fillSlider(fromInput, toInput, '#C6C6C6', '#25daa5', controlSlider);
  setToggleAccessible(toInput);
  if (from <= to) {
      toSlider.value = to;
      toInput.value = to;
  } else {
      toInput.value = from;
  }
}

function controlFromSlider(fromSlider, toSlider, fromInput) {
const [from, to] = getParsed(fromSlider, toSlider);
fillSlider(fromSlider, toSlider, '#C6C6C6', '#25daa5', toSlider);
if (from > to) {
  fromSlider.value = to;
  fromInput.value = to;
} else {
  fromInput.value = from;
}
}

function controlToSlider(fromSlider, toSlider, toInput) {
const [from, to] = getParsed(fromSlider, toSlider);
fillSlider(fromSlider, toSlider, '#C6C6C6', '#25daa5', toSlider);
setToggleAccessible(toSlider);
if (from <= to) {
  toSlider.value = to;
  toInput.value = to;
} else {
  toInput.value = from;
  toSlider.value = from;
}
}

function getParsed(currentFrom, currentTo) {
const from = parseInt(currentFrom.value, 10);
const to = parseInt(currentTo.value, 10);
return [from, to];
}

function fillSlider(from, to, sliderColor, rangeColor, controlSlider) {
  const rangeDistance = to.max-to.min;
  const fromPosition = from.value - to.min;
  const toPosition = to.value - to.min;
  controlSlider.style.background = `linear-gradient(
    to right,
    ${sliderColor} 0%,
    ${sliderColor} ${(fromPosition)/(rangeDistance)*100}%,
    ${rangeColor} ${((fromPosition)/(rangeDistance))*100}%,
    ${rangeColor} ${(toPosition)/(rangeDistance)*100}%, 
    ${sliderColor} ${(toPosition)/(rangeDistance)*100}%, 
    ${sliderColor} 100%)`;
}

function setToggleAccessible(currentTarget) {
const toSlider = document.querySelector('#toSlider');
if (Number(currentTarget.value) <= 0 ) {
  toSlider.style.zIndex = 2;
} else {
  toSlider.style.zIndex = 0;
}
}
export default {
data() {
  return {
    activeList:[true,false,false,false,false,false,false],
    activeList2:[true,false,false],
    activeList3:[true],
    activeList4:[true],
    activeList5:[true],
    clicked:0,
    clicked2:0,
    clicked3:0,
    clicked4:0,
    clicked5:0,
    minValue:50000,
    maxValue:100000000,
    prov:0,
    dataProv:[],
    kab:0,
    dataKab:[],
    kec:0,
    dataKec:[],
  }
},
methods: {
  Active(e){
    this.activeList[this.clicked] = false;
    this.activeList[e] = true;
    this.clicked = e;
  },
  Active2(e){
    this.activeList2[this.clicked2] = false;
    this.activeList2[e] = true;
    this.clicked2 = e;
  },
  Active3(e){
    this.activeList3[this.clicked3] = false;
    this.activeList3[e] = true;
    this.clicked3 = e;
    if(e>=1){
      this.getKab(e);
    }
    else{this.dataKab = [];
      this.activeList4[this.clicked4] = false;
      this.clicked4 = 0;
      this.activeList4[this.clicked4] = true;
      this.dataKec = [];
      this.activeList5[this.clicked5] = false;
      this.clicked5 = 0;
      this.activeList5[this.clicked5] = true;
    }
  },
  Active4(e){
    this.activeList4[this.clicked4] = false;
    this.activeList4[e] = true;
    this.clicked4 = e;
    if(e>=1){
      this.getKec(e);
    }
    else{this.dataKec = [];
      this.activeList5[this.clicked5] = false;
      this.clicked5 = 0;
      this.activeList5[this.clicked5] = true;
    }
  },
  Active5(e){
    this.activeList5[this.clicked5] = false;
    this.activeList5[e] = true;
    this.clicked5 = e;
  },
  resets(){
    this.minValue = 50000;
    this.maxValue= 100000000;
    this.activeList[this.clicked] = false;
    this.activeList2[this.clicked2] = false;
    this.activeList3[this.clicked3] = false;
    this.activeList4[this.clicked4] = false;
    this.activeList5[this.clicked5] = false;
    this.clicked= 0;
    this.clicked2 = 0;
    this.clicked3 = 0;
    this.clicked4 = 0;
    this.clicked5 = 0;
    this.activeList[this.clicked] = true;
    this.activeList2[this.clicked2] = true;
    this.activeList3[this.clicked3] = true;
    this.activeList4[this.clicked4] = true;
    this.activeList5[this.clicked5] = true;
    this.dataKab = [];
    this.dataKec = [];
  },
  submits(){
    const submissions = [this.minValue, this.maxValue,this.clicked2, this.clicked, this.clicked3, this.clicked4, this.clicked5];
    this.$emit('update:submissions', submissions);
    this.$emit('close');
  },
  async getData() {
      var link = "https://api.belajardimana.com?Getting=true";
        try {
        const headers = { "Content-Type": "application/json"};
        fetch(link, { headers })
        .then(response => response.json())
        .then(data => (this.dataProv = data));
      } catch (error) {
        console.log(error);
      }
    },
  async getKab(e) {
      var link = "https://api.belajardimana.com?Prov="+e;
        try {
        const headers = { "Content-Type": "application/json"};
        fetch(link, { headers })
        .then(response => response.json())
        .then(data => (this.dataKab = data));
      } catch (error) {
        console.log(error);
      }
    },
    async getKec(e) {
      var link = "https://api.belajardimana.com?Kab="+e;
        try {
        const headers = { "Content-Type": "application/json"};
        fetch(link, { headers })
        .then(response => response.json())
        .then(data => (this.dataKec = data));
      } catch (error) {
        console.log(error);
      }
    },
  
},
watch:{
  dataProv: function(){
    this.activeList3 = [true];
    for (let i = 0; i < this.dataProv.length; i++) {
      this.activeList3.push(false);
    }
    },
    dataKab: function(){
    this.activeList4 = [true];
    for (let i = 0; i < this.dataKab.length; i++) {
      this.activeList4.push(false);
    }
    },
    dataKec: function(){
    this.activeList5 = [true];
    for (let i = 0; i < this.dataKec.length; i++) {
      this.activeList5.push(false);
    }
    },
},
mounted() {
  const fromSlider = document.querySelector('#fromSlider');
const toSlider = document.querySelector('#toSlider');
const fromInput = document.querySelector('#fromInput');
const toInput = document.querySelector('#toInput');
fillSlider(fromSlider, toSlider, '#C6C6C6', '#25daa5', toSlider);
setToggleAccessible(toSlider);

fromSlider.oninput = () => controlFromSlider(fromSlider, toSlider, fromInput);
toSlider.oninput = () => controlToSlider(fromSlider, toSlider, toInput);
fromInput.oninput = () => controlFromInput(fromSlider, fromInput, toInput, toSlider);
toInput.oninput = () => controlToInput(toSlider, fromInput, toInput, toSlider);

},
created() {
  this.getData();
},
}
  

</script>
<style>
.range_container {
  display: flex;
  flex-direction: column;
}

.sliders_control {
  position: relative;
  align-items: center;
  min-height: 50px;
}

.form_control {
  position: relative;
  display: flex;
  justify-content: space-between;
  font-size: 24px;
  color: #635a5a;
}

input[type=range]::-webkit-slider-thumb {
  -webkit-appearance: none;
  pointer-events: all;
  width: 24px;
  height: 24px;
  background-color: #fff;
  border-radius: 50%;
  box-shadow: 0 0 0 1px #C6C6C6;
  cursor: pointer;
}

input[type=range]::-moz-range-thumb {
  pointer-events: all;
  width: 24px;
  height: 24px;
  background-color: #fff;
  border-radius: 50%;
  box-shadow: 0 0 0 1px #C6C6C6;
  cursor: pointer;  
}

input[type=range]::-webkit-slider-thumb:hover {
  background: #f7f7f7;
}

input[type=range]::-webkit-slider-thumb:active {
  box-shadow: inset 0 0 3px #387bbe, 0 0 9px #387bbe;
  -webkit-box-shadow: inset 0 0 3px #387bbe, 0 0 9px #387bbe;
}

input[type="number"] {
  color: #8a8383;
  width: 200px;
  height: 30px;
  font-size: 20px;
  border: none;
}

input[type=number]::-webkit-inner-spin-button, 
input[type=number]::-webkit-outer-spin-button {  
   opacity: 1;
}

input[type="range"] {
  -webkit-appearance: none; 
  appearance: none;
  height: 2px;
  width: 100%;
  margin-left: -50%;
  position: absolute;
  background-color: #C6C6C6;
  pointer-events: none;
}

#fromSlider {
  height: 0;
  z-index: 1;
}
.active{
  background: black;
}
</style>