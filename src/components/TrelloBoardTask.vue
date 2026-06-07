<script setup lang="ts">
import type { Task } from '@/types'
import DragHandle from './DragHandle.vue'

interface Props {
	task: Task
}

defineProps<Props>()
</script>

<template>
	<div
		class="task mb-2 flex gap-1 rounded max-w-62.5 p-2 bg-white shadow-sm"
		:title="task.createdAt.toLocaleDateString()">
		<DragHandle class="mt-1" size="sm" />
		<span>{{ task.title }}</span>
	</div>
</template>
