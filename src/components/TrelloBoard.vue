<script setup lang="ts">
import type { Column } from '@/types'

import { ref } from 'vue'
import { nanoid } from 'nanoid'
import draggable from 'vuedraggable'
import DragHandle from '@/components/DragHandle.vue'
import TrelloBoardTask from '@/components/TrelloBoardTask.vue'

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
		<draggable
			v-model="columns"
			group="columns"
			item-key="id"
			animation="150"
			handle=".drag-handle"
			class="flex items-start gap-4">
			<template #item="{ element: column }: { element: Column }">
				<div class="rounded min-w-62.5 bg-gray-200 p-5">
					<div class="mb-4 flex items-center gap-1">
						<DragHandle />
						<span>
							{{ column.title }}
						</span>
					</div>

					<div>
						<TrelloBoardTask
							v-for="task in column.tasks"
							:key="task.id"
							:task="task" />
					</div>

					<div>
						<button class="p-2 text-start opacity-50 cursor-pointer">
							+ Add a card
						</button>
					</div>
				</div>
			</template>
		</draggable>
	</div>
</template>
