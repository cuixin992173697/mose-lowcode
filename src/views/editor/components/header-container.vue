<template>
  <div class="header">
		<p>欢迎来到首页</p>
		<div class="theme-switch">
			<el-switch
				v-model="themeColor"
				:active-action-icon="Moon"
        :inactive-action-icon="Sunny"
				@change="handleThemeChange"
			/>
		</div>
		
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Sunny, Moon } from '@element-plus/icons-vue'

const themeColor = ref(false)

function handleThemeChange(value: boolean) {
  console.log('主题切换:', value ? '暗黑模式' : '亮色模式')
}

</script>

<style lang="scss" scoped>
.header {
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 50px;
	background-color: #fff;
}
.theme-switch {
	margin-right: 20px;
}
.el-switch {
	--el-switch-on-color: #2c2c2c;
	--el-switch-off-color: #f2f2f2;
}
</style>