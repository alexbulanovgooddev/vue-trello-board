<script setup lang="ts">
import type { Column } from '@/types'

import { ref } from 'vue'
import { nanoid } from 'nanoid'

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
	<div class="px-10 py-1 flex-1 flex items-start gap-4 overflow-x-auto">
		<div class="flex items-start gap-4">
			<div
				v-for="column in columns"
				:key="column.id"
				class="rounded min-w-62.5 bg-gray-200 p-5">
				<div class="mb-4 flex items-center gap-1">
					{{ column.title }}
				</div>

				<div>
					<div
						v-for="task in column.tasks"
						:key="task.id"
						class="mb-2 flex gap-1 rounded max-w-62.5 p-2 bg-white shadow-sm">
						<span>{{ task.title }}</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
