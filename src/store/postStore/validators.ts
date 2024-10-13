export const validatePostName = 	(name: string) => {
	if (name.trim().length) {
		return true;
	}

	return 'Необходимо ввести имя';
}