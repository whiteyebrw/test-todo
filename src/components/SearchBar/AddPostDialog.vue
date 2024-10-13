<script setup lang="ts">
import { ref } from 'vue';
import { usePostStore } from '../../store/postStore/postStore.ts';
import { rulesPostName } from '../../store/postStore/constants.ts';

const postStore = usePostStore();

const isOpenDialog = ref(false);
const name = ref('');
const isValidForm = ref(false);

const closeDialog = () => {
	isOpenDialog.value = false;
	name.value = '';
};

const handleSubmit = () => {
	postStore.addPost(name.value);
	closeDialog();
};
</script>

<template>
	<v-dialog v-model="isOpenDialog" max-width="400">
		<template v-slot:activator="{ props: activatorProps }">
			<v-btn
				text="Добавить пост"
				v-bind="activatorProps"
			/>
		</template>

		<v-card title="Создание поста">
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
						text="Добавить"
					/>
				</v-card-actions>
			</v-form>
		</v-card>
	</v-dialog>
</template>

<style scoped>

</style>