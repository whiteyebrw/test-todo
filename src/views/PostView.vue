<script setup lang="ts">
import SearchPostInput from '../components/SearchBar/SearchBar.vue';
import PostList from '../components/PostList/PostList.vue';
import { usePostStore } from '../store/postStore/postStore.ts';
import { onMounted } from 'vue';

const postStore = usePostStore();

onMounted(() => {
	postStore.getPosts();
});
</script>

<template>
	<v-container>
		<SearchPostInput/>

		<PostList/>
	</v-container>
</template>

<style scoped>

</style>