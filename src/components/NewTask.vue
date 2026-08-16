<script setup lang="ts">
import type { Task } from '@/types'

import { ref } from 'vue'
import { nanoid } from 'nanoid'

const emit = defineEmits<{
	(e: 'add', payload: Task): void
}>()

const focused = ref<boolean>(false)
const title = ref<string>('')

function createTask(): void {
	if (title.value.trim()) {
		emit('add', {
			id: nanoid(),
			title: title.value.trim(),
			createdAt: new Date()
		} as Task)
	}

	title.value = ''
}
</script>

<template>
	<div>
		<textarea
			v-model="title"
			class="rounded border-0 w-full p-2 resize-none focus:bg-white focus:shadow focus:outline-none"
			:class="{
				'h-10 overflow-hidden': !focused,
				'h-20': focused
			}"
			:placeholder="!focused ? '+ Add a card' : 'Enter a title for this card'"
			aria-label="Add a card"
			@focus="focused = true"
			@blur="
				() => {
					focused = false
					createTask()
				}
			"
			@keydown.tab="createTask"
			@keyup.enter.exact="createTask"></textarea>
	</div>
</template>
