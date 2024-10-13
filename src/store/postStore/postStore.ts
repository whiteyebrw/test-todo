import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import { Post } from './types.ts';
import { initialPosts } from './posts.ts';

export const usePostStore = defineStore('postStore', () => {
	const posts = ref<Post[]>([]);
	const search = ref('');

	const filteredPosts = computed(() => {
		return posts.value.filter(post => post.name.toLowerCase().includes(search.value.toLowerCase()));
	});

	const isEmpty = computed(() => filteredPosts.value.length === 0);

	const getPosts = () => {
		const storedPosts = localStorage.getItem('posts');
		if (storedPosts) {
			posts.value = JSON.parse(storedPosts);
		} else {
			posts.value = initialPosts;
			savePostsToLocalStorage();
		}
	};

	const savePostsToLocalStorage = () => {
		localStorage.setItem('posts', JSON.stringify(posts.value));
	};

	const removePost = (id: string) => {
		posts.value = posts.value.filter((post) => post.id !== id);
		savePostsToLocalStorage();
	};

	const addPost = (name: string) => {
		const newPost: Post = {
			id: Date.now().toString(),
			name,
		};

		posts.value.push(newPost);
		savePostsToLocalStorage();
	};

	const setPost = (newPost: Post) => {
		const postIndex = posts.value.findIndex((post) => post.id === newPost.id);

		if (postIndex === -1) {
			return;
		}

		posts.value[postIndex] = newPost;

		savePostsToLocalStorage();
	}

	const setSearch = (newSearch: string) => {
		search.value = newSearch;
	};

	return {
		search,
		filteredPosts,
		isEmpty,
		setSearch,
		setPost,
		addPost,
		removePost,
		getPosts,
	};
});