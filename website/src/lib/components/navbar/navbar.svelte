<script lang='ts'>
    let permissions = 'admin';
</script>

<div id='navbar'>
    {#if permissions === 'admin'}
    <a href='/admin'>Admin</a>
    {/if}
    <a href='/'>Dashboard</a>
    <a href='/'>Education</a>
    <a href='/'>Settings</a>
    <a href='/'>Logout</a>
</div>

<style lang="scss">
:root {
    --navbar-padding: 1rem;
}
div#navbar {
    display: flex;
    flex-direction: column;

    padding: var(--navbar-padding);

    background-color: #dcddd3;

    max-width: 20%;
    min-height: calc(100vh - 2rem);
    max-height: calc(100vh - 2rem);

    position: sticky;
    top: 0;
    left: 0;
}
a {
    text-decoration: none;
}
</style>