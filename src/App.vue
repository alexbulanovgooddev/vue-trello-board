<script setup lang="ts">
import TrelloBoard from './components/TrelloBoard.vue'
</script>

<template>
	<div class="flex flex-col h-svh py-10 bg-teal-600 overflow-auto">
		<div class="mb-4 px-10">
			<div class="flex items-center gap-2">
				<img class="w-9 h-9" src="./assets/vite.svg" alt="" />
				<h1 class="text-3xl font-bold font-mono text-white">TrelloBoard</h1>
			</div>
		</div>
		<TrelloBoard />
	</div>
</template>
