<script setup lang="ts">

import PostItem from './PostItem/PostItem.vue';
import { usePostStore } from '../../store/postStore/postStore.ts';

const postStore = usePostStore();
</script>

<template>
	<v-virtual-scroll width="600px" max-height="600px" v-if="!postStore.isEmpty" :items="postStore.filteredPosts">
		<template v-slot:default="{ item }">
			<PostItem
				:key="item.id"
				:post="item"
			/>
		</template>
	</v-virtual-scroll>
	<v-empty-state width="600px" v-else title="Постов не найдено"/>
</template>

<style scoped>

</style>