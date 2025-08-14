<template>
	<div class="container">
		<header-container />
		<div class="content">
			<div class="content-left" :class="{ collapsed: isCollapsed }">
				<div></div>
				<div class="toggle" :class="isCollapsed ? 'hidden' : 'show'" @click="toggleLeft">
					<img class="toggle-icon" :src="isCollapsed ? rightImg : leftImg" >
				</div>
			</div>
			<div class="content-center">中间</div>
			<div class="content-right">右侧</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import headerContainer from './cmponents/headerContainer.vue'
import leftImg from '@/assets/img/left.png'
import rightImg from '@/assets/img/right.png'
const isCollapsed = ref(false)
function toggleLeft() {
    isCollapsed.value = !isCollapsed.value
}
</script>

<style lang="scss" scoped>
.container {
	display: flex;
	flex-direction: column;
	height: 100vh;
	background-color: #fff;
}

.content {
	display: flex;
	justify-content: space-between;
	flex: 1;
}
.content-left {
	width: 280px;
	height: 100%;
	background-color: #fff;
	position: relative;
}
.collapsed {
	width: 12px;
}
.toggle {
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
	top: 30px;
	right: 0px;
	width: 12px;
	height: 20px;
	cursor: pointer;
}
.toggle-icon {
	display: block;
	width: 12px;
	height: 12px;
}
.show {
	border-top: 1px solid #ccc;
	border-bottom: 1px solid #ccc;
	border-left: 1px solid #ccc;
	border-top-left-radius: 10px;
	border-bottom-left-radius: 10px;
}
.hidden {
  border-top: 1px solid #ccc;
	border-bottom: 1px solid #ccc;
	border-right: 1px solid #ccc;	
	border-top-right-radius: 10px;
	border-bottom-right-radius: 10px;
}
.content-center {
	flex: 1;
	background-color: lightblue;
	height: 100%;
}
.content-right {
	width: 280px;
	background-color: lightgreen;
	height: 100%;
}
</style>