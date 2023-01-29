<script lang='ts'>
    import Navbar from '$lib/components/navbar/navbar.svelte';
</script>

<div id='layout-manager'>
    <Navbar />

    <slot />
</div>


<style lang='scss'>
:root {
    --black: #222023;
    --bg-color: #dcddd3;
    --white: #f7f8f5;
}
:global(body, html) {
    margin: 0;
    padding: 0;
    background-color: var(--bg-color);
    font-family: 'futura', sans-serif;
}

div#layout-manager {
    display: flex;
}
</style>