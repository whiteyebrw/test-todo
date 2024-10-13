<script setup lang="ts">
import { Post } from '../../../store/postStore/types.ts';
import EditPostDialog from './EditPostDialog.vue';
import RemovePostDialog from './RemovePostDialog.vue';

interface Props {
	post: Post;
}

defineProps<Props>();
</script>

<template>
	<v-list-item class="post-item" :title="post.name">
		<template v-slot:append>
			<EditPostDialog :post="post" />
			<RemovePostDialog :post-id="post.id" />
		</template>
	</v-list-item>
</template>

<style scoped>
.post-item:hover {
	background-color: rgba(0, 0, 0, 0.05);
}
</style>