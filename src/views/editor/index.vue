<template>
	<editor-layout>
		<!-- 顶部header -->
		<template #top>
			<headerContainer />
    </template>

		<!-- 左侧物料栏 -->
		<template #left>
			<left-material-container />
		</template>

		<!-- 中间画布 -->
		<template #center>
			<center-draw-container />
		</template>

		<!-- 右侧编辑栏 -->
		<template #right>
			<right-edit-container />
		</template>
	</editor-layout>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

import editorLayout from '@/layout/editor-layout.vue'
import headerContainer from './components/header-container.vue';
import leftMaterialContainer from './components/left-material-container.vue';
import centerDrawContainer from './components/center-draw-container.vue';
import rightEditContainer from './components/right-edit-container.vue';


</script>

<style lang="scss" scoped>
</style>