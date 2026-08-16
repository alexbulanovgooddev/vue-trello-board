<script setup lang="ts">
import type { Task } from '@/types'

interface Props {
	task: Task
}

defineProps<Props>()
</script>

<template>
	<div
		class="mb-2 flex gap-1 rounded max-w-62.5 p-2 bg-white shadow-sm"
		:title="new Date(task.createdAt).toLocaleDateString()"
		tabindex="0">
		<span>{{ task.title }}</span>
	</div>
</template>
