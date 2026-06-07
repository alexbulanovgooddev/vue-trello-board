<script setup lang="ts">
import type { Column, Task } from '~/types'
import { ref } from 'vue'
import { nanoid } from 'nanoid'
import { useKeyModifier } from '@vueuse/core'
import draggable from 'vuedraggable'
import TrelloBoardTask from './TrelloBoardTask.vue'
import DragHandle from './DragHandle.vue'

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
</script>

<template>
	<draggable
		v-model="columns"
		group="columns"
		item-key="id"
		animation="150"
		handle=".drag-handle"
		class="px-10 flex-1 flex items-start gap-4 overflow-x-auto">
		<template #item="{ element: column }: { element: Column }">
			<div class="column rounded min-w-62.5 bg-gray-200 p-5">
				<div class="mb-4 flex items-center gap-1">
					<DragHandle />
					<span class="font-bold">{{ column.title }}</span>
				</div>

				<draggable
					v-model="column.tasks"
					:group="{ name: 'tasks', pull: alt ? 'clone' : true }"
					item-key="id"
					animation="150"
					handle=".drag-handle">
					<template #item="{ element: task }: { element: Task }">
						<TrelloBoardTask :task="task" />
					</template>
				</draggable>
				<div>
					<button class="text-gray-500 cursor-pointer">+ Add a Card</button>
				</div>
			</div>
		</template>
	</draggable>
</template>
