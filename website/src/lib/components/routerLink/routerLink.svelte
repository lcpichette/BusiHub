<script lang='ts' module>
    export let href;
</script>

<a {href}>
    <slot></slot>
    <div class='cover'></div>
</a>

<style lang='scss'>
:root {
    --navbar-item-padding-horizontal: 1rem;
    --navbar-item-padding-vertical: 0.5rem;
    --navbar-item-hover-darken: 0.1;
}
a {
    text-decoration: none;
    font-weight: 600;
    font-size: 1.25rem;
    color: var(--black);
    padding: var(--navbar-item-padding-vertical) var(--navbar-item-padding-horizontal);
    border-radius: 5px;
    position: relative;

    .cover {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background-color: var(--black);
        opacity: 0;
        transition: 200ms ease-in-out;
    }

    &:hover .cover {
        opacity: var(--navbar-item-hover-darken);
    }
}
</style>