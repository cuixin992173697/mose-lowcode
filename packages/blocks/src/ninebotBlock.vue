<template>
	<div>标题</div>
</template>

<script setup lang="ts">
type NinebotBlock = {
	type: 'ninebot',
	props:{
		id: string,
		name: string,
	},
	style: {
		backgroundColor: string,
		border: string,
	},
	events: {
		onClick: () => void,
	},
}


</script>

<style lang="scss" scoped>

</style>
