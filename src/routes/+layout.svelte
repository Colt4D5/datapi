<script>
	import { browser } from '$app/environment';
	import Header from '$lib/components/Header.svelte';
	import '../app.postcss';
	export let data;
	
	if (browser && data.theme) {
		document.cookie = `theme=${data.theme}; max-age=${60*60*24*30}; Path=/`;
	} else if (browser) {
		const colorScheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
		document.cookie = `theme=${colorScheme}; max-age=${60*60*24*30}; Path=/`;
	}
</script>

<Header theme={data.theme} />

<slot />
