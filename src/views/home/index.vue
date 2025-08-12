<template>
	<div class="container">
		<div class="header">
			<p>欢迎来到首页</p>
		</div>
		<div class="content">
			<div class="content-left">左侧</div>
			<div class="content-center">中间</div>
			<div class="content-right">右侧</div>
		</div>
	</div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.container {
	display: flex;
	flex-direction: column;
	height: 100vh;
}
.header {
	height: 50px;
}
.content {
	display: flex;
	justify-content: space-between;
	flex: 1;
}
.content-left {
	width: 280px;
	height: 100%;
	background-color: sandybrown;
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