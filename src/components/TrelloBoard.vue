<script setup lang="ts">
import type { Column, Task } from '~/types'
import { ref, nextTick } from 'vue'
import { nanoid } from 'nanoid'
import { useKeyModifier } from '@vueuse/core'
import draggable from 'vuedraggable'
import TrelloBoardTask from './TrelloBoardTask.vue'
import DragHandle from './DragHandle.vue'
import NewTask from './NewTask.vue'

const columns = ref<Column[]>([
	{
		id: nanoid(),
		title: 'Backlog',
		tasks: [
			{
				id: nanoid(),
				title: 'Create marketing landing page',
				createdAt: new Date()
			},
			{
				id: nanoid(),
				title: 'Develop cool new feature',
				createdAt: new Date()
			},
			{
				id: nanoid(),
				title: 'Fix page nav bug',
				createdAt: new Date()
			}
		]
	},
	{
		id: nanoid(),
		title: 'Selected for Dev',
		tasks: []
	},
	{
		id: nanoid(),
		title: 'In Progress',
		tasks: []
	},
	{
		id: nanoid(),
		title: 'QA',
		tasks: []
	},
	{
		id: nanoid(),
		title: 'Complete',
		tasks: []
	}
])

const alt = useKeyModifier('Alt')

function createColumn(): void {
	const column: Column = {
		id: nanoid(),
		title: '',
		tasks: []
	}

	columns.value.push(column)

	nextTick(() => {
		;(
			document.querySelector(
				'.column:last-of-type .title-input'
			) as HTMLInputElement
		)?.focus()
	})
}
</script>

<template>
	<div class="px-10 py-1 flex-1 flex items-start gap-4 overflow-x-auto">
		<draggable
			v-model="columns"
			group="columns"
			item-key="id"
			animation="150"
			handle=".drag-handle"
			class="flex items-start gap-4">
			<template #item="{ element: column }: { element: Column }">
				<div class="column rounded min-w-62.5 bg-gray-200 p-5">
					<div class="mb-4 flex items-center gap-1">
						<DragHandle />
						<input
							v-model="column.title"
							class="title-input w-full px-1 bg-transparent font-bold focus-visible:outline-gray-900 focus:outline-gray-900 focus-visible:bg-white focus:bg-white"
							type="text"
							@keyup.enter="($event.target as HTMLInputElement).blur()"
							@keydown.backspace="
								column.title === ''
									? (columns = columns.filter(c => c.id !== column.id))
									: null
							" />
					</div>

					<draggable
						v-model="column.tasks"
						:group="{ name: 'tasks', pull: alt ? 'clone' : true }"
						item-key="id"
						animation="150"
						handle=".drag-handle">
						<template #item="{ element: task }: { element: Task }">
							<div>
								<TrelloBoardTask
									:task="task"
									@delete="
										column.tasks = column.tasks.filter(t => t.id !== $event)
									" />
							</div>
						</template>
					</draggable>
					<div>
						<NewTask @add="column.tasks.push($event)" />
					</div>
				</div>
			</template>
		</draggable>

		<button
			class="rounded p-2 whitespace-nowrap bg-gray-200 opacity-50 cursor-pointer hover:opacity-100 focus:opacity-100 focus-visible:opacity-100 transition"
			@click="createColumn">
			+ Add Another Column
		</button>
	</div>
</template>
