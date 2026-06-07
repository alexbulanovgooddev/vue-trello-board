<script setup lang="ts">
import type { ID, Task } from '@/types'
import { ref } from 'vue'
import DragHandle from './DragHandle.vue'
import { onKeyStroke } from '@vueuse/core'

interface Props {
	task: Task
}

const props = defineProps<Props>()

const emit = defineEmits<{
	(e: 'delete', payload: ID): void
}>()

const focused = ref<boolean>(false)

onKeyStroke('Backspace', () => {
	if (focused.value) {
		emit('delete', props.task.id)
	}
})
</script>

<template>
	<div
		class="task mb-2 flex gap-1 rounded max-w-62.5 p-2 bg-white shadow-sm focus-visible:outline-gray-900 focus:outline-gray-900"
		:title="task.createdAt.toLocaleDateString()"
		tabindex="0"
		@focus="focused = true"
		@blur="focused = false">
		<DragHandle class="mt-1" size="sm" />
		<span>{{ task.title }}</span>
	</div>
</template>

<style>
@reference "../style.css";

.sortable-drag .task {
	transform: rotate(5deg);
}

.sortable-ghost .task {
	position: relative;
}

.sortable-ghost .task::after {
	content: '';

	@apply absolute inset-0 bg-slate-300 rounded;
}
</style>
