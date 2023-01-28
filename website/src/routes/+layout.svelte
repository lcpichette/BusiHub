<script lang='ts'>
    import Navbar from '$lib/components/navbar/navbar.svelte';
</script>

<Navbar />

<slot />

<style>
    :global(body, html) {
        margin: 0;
        padding: 0;
        background-color: #f7f8f5;
    }
</style>