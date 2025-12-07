<script lang="ts">
    import favicon from '$lib/assets/favicon.ico';
    let { children } = $props();
	import logo from '$lib/assets/logo.webp'
	import Icon from '@iconify/svelte';
	import { page } from '$app/stores';
	import '../app.css';

    let date = $state(new Date().getFullYear());
</script>
<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>
<header class="row top fixed primary-container">
	<img src="{logo}" alt="Lance Computer Logo" height="50px" class="margin">
	<h1>Michael B. Lance</h1>
	<div class=" absolute right right-margin padding">
		<nav class="tabbed background small">
			<a href="/" class:primary={$page.url.pathname === '/'}>
				<Icon icon=material-symbols:home-rounded width="1.5rem"/>
				<span>Home</span>
			</a>
			<a href="/employability" class:primary={$page.url.pathname === '/employability'}>
				<Icon icon="tdesign:education-filled" width="1.5rem"/>
				<span>Employability</span>
			</a>
			<a href="/portfolio" class:primary={$page.url.pathname === '/portfolio'}>
				<Icon icon="ant-design:project-filled" width="1.5rem"/>
				<span>portfolio</span>
			</a>
			<a href="/skills" class:primary={$page.url.pathname === '/skills'}>
				<Icon icon="carbon:skill-level-advanced" width="1.5rem"/>
				<span>Skills</span>
			</a>
		</nav>
	</div>
</header>
<main class="responsive">
	<div class="page left active">
		{@render children()}
	</div>
</main>
<footer class="row center-align fixed transparent">
	<span>© {date} All rights reserved  Michael Lance</span>
	<a href="https://github.com/MikeL270" >
		<Icon icon="mdi:github" width="1.5rem"/> 
	</a>
</footer>

