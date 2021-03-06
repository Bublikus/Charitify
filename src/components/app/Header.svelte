<script>
    import { onMount } from 'svelte'
    import { Storages } from '@services'
    import { classnames, safeGet } from '@utils'
    import Icon from '@components/Icon.svelte'
    import Button from '@components/Button.svelte'
    import Avatar from '@components/Avatar.svelte'

    export let segment

    let value = 'ua'

    const gap = 50
    let isHeaderVisible = true
    let onScroll = null
    let lastY = 0
    $: classProp = classnames('container', { active: isHeaderVisible })
    onMount(() => {
        onScroll = () => requestAnimationFrame(function() {
            const currentY = window.pageYOffset;
            const direction = currentY - lastY
            if (direction < -gap || currentY < 50) { // up (50 - max scrollTop for displaying header)
                if (!isHeaderVisible) {
                    isHeaderVisible = true
                    document.body.classList.remove('header-inactive')
                }
                lastY = currentY + gap;
            } else if (direction > gap) { // down
                if (isHeaderVisible) {
                    isHeaderVisible = false
                    document.body.classList.add('header-inactive')
                }
                lastY = currentY - gap;
            }
        })
    })

    let themeName = safeGet(() => Storages.cookieStorage.get('theme') || Storages.localStorage.get('theme'))
    function changeTheme(theme) {
        themeName = theme
        document.body.classList.remove('theme-dark')
        document.body.classList.remove('theme-light')
        document.body.classList.add(theme)

        document.getElementById('main').classList.remove('theme-dark')
        document.getElementById('main').classList.remove('theme-light')
        document.getElementById('main').classList.add(theme)

        Storages.cookieStorage.set('theme', theme)
        Storages.localStorage.set('theme', theme)
    }

    onMount(() => {
        changeTheme(themeName)
    })
</script>

<svelte:window on:scroll={onScroll}/>
<section class={classProp}>
    <nav class="full-height">
        <ul class="nav-pages flex">
            <li><a rel=prefetch href='.' class:selected='{segment === undefined}'>home</a></li>
            <li><a rel=prefetch href='lists/funds' class:selected='{segment === "lists"}'>lists</a></li>
            <li><a href='map' class:selected='{segment === "map"}'>map</a></li>
        </ul>

        <ul class="nav-actions">
            <!-- <li>
                <select {value} name="lang" id="lang" class="btn small lang-select">
                    <option value="ua">Ua</option>
                    <option value="ru">Ru</option>
                    <option value="en">En</option>
                </select>
            </li> -->

            <li>
                <Button on:click={() => changeTheme(themeName === 'theme-light' ? 'theme-dark' : 'theme-light')} auto size="small">
                    <Icon type="moon" size="medium" class="theme-svg-fill-opposite" is="light"/>
                </Button>
            </li>

            <li>
                <a class="btn small" href="users/me">
                    <Avatar size="small" src="https://placeimg.com/30/30/people" alt="avatar"/>
                </a>
            </li>
        </ul>
    </nav>
</section>

<style>
    section {
        position: fixed;
        top: 0;
        width: 100%;
        z-index: 7;
        display: flex;
        align-items: center;
        height: var(--header-height);
        box-shadow: var(--shadow-secondary);
        background-color: rgba(var(--color-dark-second));
        transition: .2s ease-in-out;
        transform: translateY(-100%);
    }
    section.active {
        transform: none
    }
    nav {
        width: 100%;
        margin: auto;
        flex-grow: 1;
        display: flex;
        align-items: center;
        color: rgba(var(--color-font-light));
        justify-content: space-between;
        max-width: var(--full-container);
    }

    .selected {
        position: relative;
        display: inline-block;
    }

    .selected::after {
        position: absolute;
        content: "";
        width: calc(100% - 1em);
        height: 2px;
        background-color: rgb(var(--color-danger));
        display: block;
        bottom: -1px;
    }

    .nav-pages a {
        padding: 0.8em 0.5em;
    }

    .nav-actions {
        display: flex;
        align-items: center;
        margin: -3px;
    }

    .nav-actions li {
        padding: 3px;
    }

    .nav-actions a {
        display: block;
    }

    .lang-select {
        padding: 5px;
        background-color: transparent;
        color: rgba(var(--color-font-light));
    }

    .lang-select:hover,
    .lang-select:focus {
        box-shadow: none;
        background-color: rgba(var(--color-black), 0.1);
    }
</style>
