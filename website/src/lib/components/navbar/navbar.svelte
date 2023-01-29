<script lang='ts'>
    import RouterLink from '$lib/components/routerLink/routerLink.svelte';

    let permissions = 'admin';
    let companyName = 'Foobar, Inc'
    let company = {
        name: 'Foobar, Inc.',
        logo_url: 'https://placekitten.com/200/200'
    }
</script>

<div id='navbar'>
    <div class='navigation-options-wrapper'>
        <div class='logo-wrapper'>
            <img src='{company.logo_url}' alt='{company.name} logo' />
        </div>

        {#if permissions === 'admin'}
        <RouterLink href='/admin'>Admin</RouterLink>
        {/if}
        <RouterLink href='/'>Dashboard</RouterLink>
        <RouterLink href='/education'>Education</RouterLink>
        <RouterLink href='/settings'>Settings</RouterLink>
    </div>

    <!--TODO: Update to different styling of link -->
    <RouterLink href='/logout'>Logout</RouterLink>
</div>

<style lang="scss">
:root {
    --navbar-padding-horizontal: 3rem;
    --navbar-padding-vertical: 2rem;
    --navbar-width: 15vw;
    --navbar-options-gap: 0.5rem;
    --navbar-company-logo-height: 6rem;
}
div#navbar {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    padding: var(--navbar-padding-vertical) var(--navbar-padding-horizontal);

    min-height: calc(100vh - calc(var(--navbar-padding-vertical) * 2));
    max-height: calc(100vh - calc(var(--navbar-padding-vertical) * 2));

    min-width: var(--navbar-width);
    max-width: var(--navbar-width);

    position: sticky;
    top: 0;
    left: 0;

    .navigation-options-wrapper {
        display: flex;
        flex-direction: column;
        gap: var(--navbar-options-gap);
    }

    .logo-wrapper {
        height: var(--navbar-company-logo-height);
        margin: 0 auto 1rem auto;

        img {
            margin-bottom: 1rem;
            height: 100%;
            width: auto;
            display: block;
        }
    }
}

</style>