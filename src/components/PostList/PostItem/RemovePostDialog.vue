<script setup lang="ts">
import { ref } from 'vue';
import { usePostStore } from '../../../store/postStore/postStore.ts';

interface Props {
	postId: string;
}

const props = defineProps<Props>();

const postStore = usePostStore();

const isOpenDialog = ref(false);

const closeDialog = () => {
	isOpenDialog.value = false;
};

const handleDelete = () => {
	postStore.removePost(props.postId);
	closeDialog();
};
</script>

<template>
	<v-dialog v-model="isOpenDialog" max-width="400">
		<template v-slot:activator="{ props: activatorProps }">
			<v-btn
				size="x-small"
				variant="text"
				icon="mdi-delete"
				v-bind="activatorProps"
			/>
		</template>

		<v-card title="Удалить пост?">
				<v-card-actions>
					<v-spacer></v-spacer>

					<v-btn
						text="Закрыть"
						@click="closeDialog"
					/>
					<v-btn
						@click="handleDelete"
						color="primary"
						text="Удалить"
					/>
				</v-card-actions>
		</v-card>
	</v-dialog>
</template>

<style scoped>

</style>