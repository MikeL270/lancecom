<script lang="ts">
	export const prerender = false;
    import favicon from '$lib/assets/favicon.svg';
    let { children } = $props();
    import '../app.css';
	import Icon from '@iconify/svelte';

    let date = $state(new Date().getFullYear());

</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>
<div class="background">
	<nav class="left primary-container drawer middle-align">
		<a href="/">
			<Icon icon=mdi:about width="1.5rem"/>
			<span>About Me</span>
		</a>
		<a href="/work-history">
			<Icon icon="material-symbols:work" width="1.5rem"/>
			<span>Work History</span>
		</a>
		<a href="/portfolio">
			<Icon icon="ant-design:project-filled" width="1.5rem"/>
			<span>portfolio</span>
		</a>
		<a href="/contact">
			<Icon icon="material-symbols:contact-support" width="1.5rem"/>
			<span>Contact</span>
		</a>
	</nav>
	<main class="responsive">
		{@render children()}
	</main>
<footer class="middle-align center-align fixed">
	<span>© {date} Michael Lance</span>
	<a href="https://github.com/MikeL270" class="small-margin">
		<Icon icon="mdi:github" width="1.5rem"/> 
	</a>
</footer>
</div>
