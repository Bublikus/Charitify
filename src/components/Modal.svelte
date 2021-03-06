<script>
    import { createEventDispatcher, tick } from 'svelte'
    import { fly } from "svelte/transition";
    import { Swipe } from '@services'
    import { safeGet, classnames, delay, bodyScroll, stopPropagationInRanges } from "@utils";
    import { modals } from "@store";
    import Portal from "./Portal.svelte";
    import Br from "./Br.svelte";
    import Icon from "./Icon.svelte";

    const dispatch = createEventDispatcher()
    
    const DURATION = 250
    const THRESHOLD = 50
    const SWIPE_SPEED = .5
    const THRESHOLD_RANGES = { x: [0, 100], y: [1, 99] }
    const START_POSITION = {
        x: 50,
        y: 0
    }

    export let id
    export let ref = null
    export let size = 'full'    // small/medium/big/full
    export let swipe = []       // up down left right all
    export let title = 'Закрити'
    export let open = null
    export let startPosition = START_POSITION
    export let blockBody = true
    export let withHeader = true

    let refHeader
    let isBodyBlocked = false
    let isAllowed = {
        up: true,
        down: false,
        left: true,
        right: true,
    }

    $: isSwipe = {
        up: safeGet(() => swipe.includes('up') || swipe.includes('all')),
        down: safeGet(() => swipe.includes('down') || swipe.includes('all')),
        left: safeGet(() => swipe.includes('left') || swipe.includes('all')),
        right: safeGet(() => swipe.includes('right') || swipe.includes('all')),
    }
    $: scrollY = ref && ref.scrollTop
    $: active = safeGet(() => open !== null ? open : $modals[`modal-${id}`].open, null)
    $: classProp = classnames('modal', size, { active })
    $: onActiveChange(active)
    $: blockScroll(ref)

    function blockScroll(modal) {
        if (blockBody && active && !isBodyBlocked) {
            bodyScroll.disableScroll(modal, { extraLock: size === 'full' });
            isBodyBlocked = true
            modal && (modal.scrollTop = 0)
            isAllowed = {
                up: true,
                down: false,
                left: true,
                right: true,
            }
        } else if (blockBody && !active && isBodyBlocked) {
            bodyScroll.enableScroll(modal, { extraLock: size === 'full' });
            isBodyBlocked = false
        }
    }

    async function onActiveChange(active) {
        if (active) {
            setDuration(ref, DURATION)
            setDuration(refHeader, DURATION)
            setTimeout(() => setDuration(ref, 0), DURATION)
            setTimeout(() => setDuration(refHeader, 0), DURATION)
            drawTransform(ref, 0, 0)
            drawTransform(refHeader, 0, 0)
            drawOpacity(ref, 0, 0)
            drawOpacity(refHeader, 0, 0)
            blockScroll(ref)
            await tick()
            dispatch('open')
        } else {
            blockScroll(ref)
            await tick()
            dispatch('close')
        }
    }

    function setActive(isActive) {
        if (open !== null) open = isActive
        modals.update(s => ({ ...s, [`modal-${id}`]: { open: isActive } }))
    }

    let xSwipe = 0
    let ySwipe = 0

    function addSwipe(el) {
        stopPropagationInRanges(el, THRESHOLD_RANGES, ({ x, y }) => {
            isAllowed = {
                up: y <= THRESHOLD_RANGES.y[0],
                down: y >= THRESHOLD_RANGES.y[1],
                left: x <= THRESHOLD_RANGES.x[0] || x >= THRESHOLD_RANGES.x[1],
                right: x <= THRESHOLD_RANGES.x[0] || x >= THRESHOLD_RANGES.x[1],
            } 
        })

        new Swipe(el)
                .run()
                .onUp(isSwipe.up ? handleVerticalSwipe : null)
                .onDown(isSwipe.down ? handleVerticalSwipe : null)
                .onLeft(isSwipe.left ? handleHorizontalSwipe : null)
                .onRight(isSwipe.right ? handleHorizontalSwipe : null)
                .onTouchEnd(async () => {
                    const shift = 50

                    if (xSwipe > THRESHOLD) {
                        setDuration(el, DURATION)
                        setDuration(refHeader, DURATION)
                        setTimeout(() => setDuration(el, 0), DURATION)
                        setTimeout(() => setDuration(refHeader, 0), DURATION)
                        setActive(false)
                        drawOpacity(el, xSwipe + shift, ySwipe)
                        drawOpacity(refHeader, xSwipe + shift, ySwipe)
                        drawTransform(el, xSwipe + shift, ySwipe)
                        drawTransform(refHeader, xSwipe + shift, ySwipe)
                        await delay(DURATION)
                    } else if (xSwipe < -THRESHOLD) {
                        setDuration(el, DURATION)
                        setDuration(refHeader, DURATION)
                        setTimeout(() => setDuration(el, 0), DURATION)
                        setTimeout(() => setDuration(refHeader, 0), DURATION)
                        setActive(false)
                        drawOpacity(el, xSwipe - shift, ySwipe)
                        drawOpacity(refHeader, xSwipe - shift, ySwipe)
                        drawTransform(el, xSwipe - shift, ySwipe)
                        drawTransform(refHeader, xSwipe - shift, ySwipe)
                        await delay(DURATION)
                    }
                    
                    if (ySwipe > THRESHOLD) {
                        setDuration(el, DURATION)
                        setDuration(refHeader, DURATION)
                        setTimeout(() => setDuration(el, 0), DURATION)
                        setTimeout(() => setDuration(refHeader, 0), DURATION)
                        setActive(false)
                        drawOpacity(el, xSwipe, ySwipe + shift)
                        drawOpacity(refHeader, xSwipe, ySwipe + shift)
                        drawTransform(el, xSwipe, ySwipe + shift)
                        drawTransform(refHeader, xSwipe, ySwipe + shift)
                        await delay(DURATION)
                    } else if (ySwipe < -THRESHOLD) {
                        setDuration(el, DURATION)
                        setDuration(refHeader, DURATION)
                        setTimeout(() => setDuration(el, 0), DURATION)
                        setTimeout(() => setDuration(refHeader, 0), DURATION)
                        setActive(false)
                        drawOpacity(el, xSwipe, ySwipe - shift)
                        drawOpacity(refHeader, xSwipe, ySwipe - shift)
                        drawTransform(el, xSwipe, ySwipe - shift)
                        drawTransform(refHeader, xSwipe, ySwipe - shift)
                        await delay(DURATION)
                    }

                    if (xSwipe <= THRESHOLD && xSwipe >= -THRESHOLD && ySwipe <= THRESHOLD && ySwipe >= -THRESHOLD) {
                        setDuration(el, DURATION)
                        setDuration(refHeader, DURATION)
                        setTimeout(() => setDuration(el, 0), DURATION)
                        setTimeout(() => setDuration(refHeader, 0), DURATION)
                        drawTransform(el, 0, 0)
                        drawTransform(refHeader, 0, 0)
                    } else {
                        setStartPosition()
                    }

                    xSwipe = 0
                    ySwipe = 0
                    el && (el.style.opacity = null)
                    refHeader && (refHeader.style.opacity = null)
                })
    }

    function handleVerticalSwipe(yDown, yUp, evt, el) {
        const dir = yUp - yDown
        if (!isAllowed.up && dir > 0 || !isAllowed.down && dir < 0) return
        ySwipe = dir * SWIPE_SPEED
        drawTransform(el, xSwipe, ySwipe)
        drawTransform(refHeader, xSwipe, ySwipe)
        drawOpacity(el, xSwipe, ySwipe)
        drawOpacity(refHeader, xSwipe, ySwipe)
    }
    function handleHorizontalSwipe(xDown, xUp, evt, el) {
        const dir = xUp - xDown
        if (!isAllowed.left && dir > 0 || !isAllowed.right && dir < 0) return
        xSwipe = dir * SWIPE_SPEED
        drawTransform(el, xSwipe, ySwipe)
        drawTransform(refHeader, xSwipe, ySwipe)
        drawOpacity(el, xSwipe, ySwipe)
        drawOpacity(refHeader, xSwipe, ySwipe)
    }

    function setStartPosition() {
        drawTransform(ref, startPosition.x, startPosition.y)
        drawTransform(refHeader, startPosition.x, startPosition.y)
    }

    function drawTransform(el, x, y) {
        const delta = Math.abs(x) > Math.abs(y) ? x : y
        let scale = 1 - Math.abs(delta / window.innerHeight)
        el && (el.style.transform = `matrix(${scale}, 0, 0, ${scale}, ${x}, ${y})`)
    }
     function setDuration(el, ms) {
        el && (el.style.transitionDuration = `${ms}ms`)
    }
    function drawOpacity(el, x, y) {
        const delta = Math.abs(x) > Math.abs(y) ? x : y
        el && (el.style.opacity = 1 - Math.min(Math.abs(delta / (THRESHOLD * 1.5)), 1))
    }

    function appear(node, params) {
        if (!active) return
		const existingTransform = getComputedStyle(node).transform.replace('none', '');
        const getScale = t => .9 + .1 * t
        const getX = t => startPosition.x - startPosition.x * t
		return {
			duration: DURATION,
			css: (t) => `opacity: ${t}; transform: matrix(${getScale(t)}, 0, 0, ${getScale(t)}, ${getX(t)}, 0)`
		};
    }

    function onCloseModal() {
        setDuration(ref, DURATION)
        setDuration(refHeader, DURATION)
        setTimeout(() => setDuration(ref, 0), DURATION)
        setTimeout(() => setDuration(refHeader, 0), DURATION)
        setStartPosition()
        drawOpacity(ref, startPosition.x * 2, startPosition.y)
        drawOpacity(refHeader, startPosition.x * 2, startPosition.y)
        setTimeout(() => setActive(false), DURATION)
    }
</script>

{#if active}
    <Portal {id}>
        <div
            id={`modal-${id}`}
            bind:this={ref}
            aria-hidden="true" 
            class={classProp}
            use:addSwipe
            in:appear
            on:click={setActive.bind(null, false)}
        >
            {#if withHeader && size === 'full'}
                <Portal>
                    <slot name="header">
                        <button 
                            type="button"
                            class={classnames('modal-header', { active })}
                            in:appear
                            bind:this={refHeader}
                            on:click={onCloseModal}
                        >
                            <h2 style="padding: 15px">{ title }</h2>
                            <span class="close">
                                 <Icon type="close" size="big" is="light"/>
                            </span>
                        </button>
                    </slot>
                </Portal>   
                <Br size="60"/>
            {/if}
            <div
                class="modal-inner"
                tabindex="-1"
                role="dialog"
                aria-modal="true"
                aria-labelledby="модальне вікно"
                on:click={e => e.stopPropagation()}
            >
                {#if withHeader && size !== 'full'}
                    <slot name="header">
                        <button
                                type="button"
                                class={classnames('modal-header-relative active')}
                                in:appear
                                on:click={onCloseModal}
                        >
                            <h2 style="padding: 15px">{ title }</h2>
                            <span class="close">
                                 <Icon type="close" size="big" is="light"/>
                            </span>
                        </button>
                    </slot>
                {/if}
                <slot props={safeGet(() => $modals[`modal-${id}`], {}, true)}/>
            </div>
        </div>
    </Portal>
{/if}

<style>
    .modal {
        z-index: 8;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        overflow-x: hidden;
        overflow-y: auto;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        touch-action: manipulation;
        user-select: none;
        background-color: rgba(var(--color-black), .75);
        outline: 150px solid rgba(var(--color-black), .75);
        transition-timing-function: ease-out;
        opacity: 0;
        pointer-events: none;
    }

    .modal.active, .modal-header.active {
        opacity: 1;
        pointer-events: auto;
    }

    .modal-inner {
        display: flex;
        flex-direction: column;
        align-items: stretch;
        justify-content: stretch;
        overflow: hidden;
        transform: translateZ(0);
        background-color: rgba(var(--theme-color-primary));
    }
    .small .modal-inner {
        width: 200px;
        border-radius: var(--border-radius-big);
        max-width: var(--full-container);
    }

    .medium .modal-inner {
        width: calc(100vw - var(--screen-padding) * 2);
        border-radius: var(--border-radius-big);
        max-width: var(--full-container);
    }
    .big .modal-inner {
        width: calc(100% - var(--screen-padding) * 2);
        height: calc(100% - var(--screen-padding) * 2);
        border-radius: var(--border-radius-big);
        max-width: var(--full-container);
    }

    .full {
        align-items: stretch;
        justify-content: stretch;
    }

    .full .modal-inner {
        flex: none;
        width: 100%;
        min-height: 100%;
        border-radius: 0;
    }

    .modal-header {
        transform: translateZ(0);
        z-index: 9;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: rgb(var(--color-white));
        background-color: rgb(var(--color-info));
        opacity: 0;
        pointer-events: none;
        transform-origin: 50% 50vh;
    }

    .modal-header-relative {
        transform: translateZ(0);
        z-index: 9;
        position: relative;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: rgb(var(--color-white));
        background-color: rgb(var(--color-info));
    }

    .modal-header .close,
    .modal-header-relative .close {
        font-size: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 50px;
        height: 60px;
    }
</style>   
