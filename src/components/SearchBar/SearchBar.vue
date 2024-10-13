<script setup lang="ts">
import { usePostStore } from '../../store/postStore/postStore.ts';
import AddPostDialog from './AddPostDialog.vue';

const postStore = usePostStore();
</script>

<template>
	<v-row>
		<v-col cols="8">
			<v-text-field
				label="Поиск постов"
				:model-value="postStore.search"
				@update:model-value="postStore.setSearch"/>
		</v-col>

		<v-col>
			<add-post-dialog/>
		</v-col>
	</v-row>
</template>

<style scoped>

</style>