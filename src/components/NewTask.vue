<script setup lang="ts">
import type { Task } from '~/types'
import { ref } from 'vue'
import { nanoid } from 'nanoid'

const emit = defineEmits<{
	(e: 'add', payload: Task): void
}>()

const focused = ref<boolean>(false)
const title = ref<string>('')

function createTask(e: Event): void {
	if (title.value.trim()) {
		e.preventDefault()
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
				'h-7': !focused,
				'h-20': focused
			}"
			:placeholder="!focused ? '+ Add a card' : 'Enter. a title for this card'"
			@focus="focused = true"
			@blur="focused = false"
			@keydown.tab="createTask"
			@keyup.enter="createTask"></textarea>
	</div>
</template>
