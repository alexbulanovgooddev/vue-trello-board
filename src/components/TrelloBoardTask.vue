<script setup lang="ts">
import type { Task } from '@/types'

interface Props {
	task: Task
}

defineProps<Props>()
</script>

<template>
	<div
		class="task mb-2 rounded max-w-62.5 p-2 bg-white shadow-sm"
		:title="task.createdAt.toLocaleDateString()">
		<span>{{ task.title }}</span>
	</div>
</template>
