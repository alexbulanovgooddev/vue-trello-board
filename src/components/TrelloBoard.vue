<script setup lang="ts">
import type { Column } from '~/types'
import { ref } from 'vue'
import { nanoid } from 'nanoid'
import TrelloBoardTask from './TrelloBoardTask.vue'

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
</script>

<template>
	<div class="px-10 flex-1 flex items-start gap-4 overflow-x-auto">
		<div
			v-for="column in columns"
			:key="column.id"
			class="column rounded min-w-62.5 bg-gray-200 p-5">
			<div class="mb-4 font-bold">
				{{ column.title }}
			</div>

			<TrelloBoardTask
				v-for="task in column.tasks"
				:key="task.id"
				:task="task" />

			<div>
				<button class="text-gray-500 cursor-pointer">+ Add a Card</button>
			</div>
		</div>
	</div>
</template>
