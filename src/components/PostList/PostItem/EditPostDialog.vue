<script setup lang="ts">
import { ref } from 'vue';
import { usePostStore } from '../../../store/postStore/postStore.ts';
import { rulesPostName } from '../../../store/postStore/constants.ts';
import { Post } from '../../../store/postStore/types.ts';

interface Props {
	post: Post;
}

const props = defineProps<Props>();

const postStore = usePostStore();

const isOpenDialog = ref(false);
const name = ref(props.post.name);
const isValidForm = ref(false);

const closeDialog = () => {
	isOpenDialog.value = false;
};

const handleSubmit = () => {
	const newPost: Post = {
		id: props.post.id,
		name: name.value
	};

	postStore.setPost(newPost);
	closeDialog();
};
</script>

<template>
	<v-dialog v-model="isOpenDialog" max-width="400">
		<template v-slot:activator="{ props: activatorProps }">
			<v-btn
				size="x-small"
				variant="text"
				icon="mdi-pencil"
				v-bind="activatorProps"
			/>
		</template>

		<v-card title="Редактирование поста">
			<v-form v-model="isValidForm" @submit.prevent="handleSubmit">
				<v-textarea :rules="rulesPostName" label="Название поста" v-model="name"/>

				<v-card-actions>
					<v-spacer></v-spacer>

					<v-btn
						type="button"
						text="Закрыть"
						@click="closeDialog"
					/>
					<v-btn
						:disabled="!isValidForm"
						type="submit"
						color="primary"
						text="Изменить"
					/>
				</v-card-actions>
			</v-form>
		</v-card>
	</v-dialog>
</template>

<style scoped>

</style>