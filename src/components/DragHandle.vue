<script setup lang="ts">
import { computed } from 'vue'

type Size = 'sm' | 'md'

interface Props {
	size?: Size
}

const { size = 'md' } = defineProps<Props>()

const SIZE_MAP: Record<Size, number> = {
	sm: 20,
	md: 32,
}

const pixelSize = computed(() => SIZE_MAP[size])
</script>

<template>
	<div class="drag-handle cursor-move" :class="`drag-handle--${size}`">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			:width="pixelSize"
			:height="pixelSize"
			viewBox="0 0 256 256">
			<path
				fill="currentColor"
				d="M108 60a16 16 0 1 1-16-16a16 16 0 0 1 16 16m56 16a16 16 0 1 0-16-16a16 16 0 0 0 16 16m-72 36a16 16 0 1 0 16 16a16 16 0 0 0-16-16m72 0a16 16 0 1 0 16 16a16 16 0 0 0-16-16m-72 68a16 16 0 1 0 16 16a16 16 0 0 0-16-16m72 0a16 16 0 1 0 16 16a16 16 0 0 0-16-16" />
		</svg>
	</div>
</template>
