
<template>
  <div class="range_container ">
    <h1 class="mb-[1rem] text-lg ">Filters</h1>
    <p class="mb-[2rem] mx-[5%] text-left ">Rentang Harga</p>

      <!-- kurang pop up value, min max buang aja kalo pop up bisa ditambahin -->
      <div class="sliders_control mx-[3rem]">
          <input  id="fromSlider" type="range" v-model="minValue" min="50000" max="100000000"/>
          <input  id="toSlider" type="range" v-model="maxValue" min="50000" max="100000000"/>
      </div>

      <div class="form_control class mx-[5%]">
          <div class="form_control_container">
              <div class="form_control_container__time">Min</div>
              <input ref="input" class="form_control_container__time__input" type="number" id="fromInput"  v-model="minValue" min="50000" max="100000000"/>
          </div>
          <div class="form_control_container">
              <div class="form_control_container__time">Max</div>
              <input class="form_control_container__time__input" type="number" id="toInput" v-model="maxValue" min="50000" max="100000000"/>
          </div>
      </div>

      <div class=" mx-[5%]">
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

<!-- 
      <div class=" mx-[5%]">
        <p class="mb-[1rem] mt-[2rem] text-left ">Peringkat</p>
        <div class="flex shadow-sm " role="group">
          <button type="button" class="rounded-lg px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
            Semua
          </button>
          <button type="button" class="rounded-lg mx-[1rem] px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
            5.0
          </button>
          <button type="button" @click="actived1=false, Activate" class="rounded-lg mr-[1rem] px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
            4.5
          </button>
          <button type="button" @click="actived1=false, Activate" class="rounded-lg px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
            4.0
          </button>
          <button type="button" @click="actived1=false, Activate" class="rounded-lg mx-[1rem] px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
            3.5
          </button>
          <button type="button" @click="actived1=false, Activate" class="rounded-lg mr-[1rem] px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
            3.0
          </button>
          <button type="button" @click="actived1=false, Activate" class="rounded-lg mr-[5%] px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
            2.5
          </button>
        </div>
      </div> -->

      <div class="flex items-center justify-between flex-wrap mt-[2rem] mx-[5%] ">
        <a @click="resets" class="underline hover:font-bold">Bersihkan Semua</a>

        <button @click="submits" class='border-black text-white bg-black px-4 py-3 rounded-xl text-sm font-medium hover:bg-white hover:text-black hover:border-2 hover:border-black'>
          Tampilkan 10 Kursus
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
    clicked:0,
    clicked2:0,
    minValue:50000,
    maxValue:100000000,
    dataRef:[50000,100000000,0,0],
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
  resets(){
    this.minValue = 50000;
    this.maxValue= 100000000;
  },
  submits(){
    const submissions = [this.minValue, this.maxValue,this.clicked2, this.clicked];
    if (submissions!=this.dataRef){
      this.$emit('update:submissions', submissions);
    console.log(submissions);
    }
    else{
      this.$emit('update:submissions', []);
    console.log(submissions);
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
}
  

</script>
<style>
.range_container {
  display: flex;
  flex-direction: column;
  /* width: 80%; */
  /* margin: 0rem 2rem 0rem 2rem; */
  /* margin: 35% auto; */
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
  width: 50px;
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