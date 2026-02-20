<script setup lang="ts">
interface Tool {
	name: string;
	icon: string;
	color: string;
	detail: string;
}

interface Props {
	tool: Tool;
}

const props = defineProps<Props>();

const isImage = () => props.tool.icon.endsWith('.svg') || props.tool.icon.endsWith('.png') || props.tool.icon.endsWith('.jpg');
</script>

<template>
	<div class="column card is-narrow p-0 is-clickable tool">
		<div class="column is-narrow is-flex is-align-items-center py-0">
			<div class="column is-3 is-narrow-mobile icon">
				<i v-if="!isImage()" :class="tool.icon" :style="{ color: tool.color }"></i>
				<img v-else :src="tool.icon" :alt="tool.name" />
			</div>
			<div class="column has-text-left is-narrow">
				<div class="name">{{ tool.name }}</div>
				<div class="detail">{{ tool.detail }}</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.tool {
	background-color: var(--card-bg-color);
	// .icon {
	// 	position: relative;
	// 	padding: 30px;
	// 	font-size: 40px;
	// 	border-radius: 8px;
	// 	background-color: var(--text-color);

	// 	i {
	// 		top: 50%;
	// 		right: 50%;
	// 		position: absolute;
	// 		transform: translate(50%, -50%);
	// 	}
	// }
	.icon {
		position: relative;
		padding: 30px;
		font-size: 40px;
		border-radius: 8px;
		background-color: var(--text-color);
		display: flex;
		align-items: center;
		justify-content: center;

		i, img {
			width: auto;
			height: auto;
		}
	}
	.name {
		color: var(--text-color);
		font-size: 28px;
		font-weight: 550;
	}
	.detail {
		color: var(--text-color-grey);
		font-size: var(--text-small-font-size);
	}

	&:hover {
		background-color: var(--bg-purple);

		.text-highlight {
			color: var(--text-color);
		}
	}
}
</style>
