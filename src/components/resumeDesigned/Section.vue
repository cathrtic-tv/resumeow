<script setup>
defineProps({
    data: { type: Object, default: {} },
});
</script>


<template>
    <section class="section">
        <div class="section__header">
            <div class="section__header-icon" :style="{ maskImage: `url(/src/assets/icons/${data.icon})` }"></div>
            <h2 class="section__header-title" v-html="data.title"></h2>
        </div>

        <div class="section__content">
            <slot></slot>
        </div>
    </section>
</template>


<style lang="scss" scoped>
.section {
    & + & {
        padding-top: 1.5rem;
    }

    &__header {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        gap: 0.75rem;
        margin: 0 0 0.5rem 0;
        padding: 0 1rem 0 0.6rem;
        width: fit-content;
        height: 2.25rem;
        border-radius: 0.5rem;
        background: var(--clr__secondary-base);

        &-icon {
            min-width: 1.5rem;
            min-height: 1.5rem;
            mask-repeat: no-repeat;
            mask-position: center;
            mask-size: contain;
            background: var(--clr__background-base);
        }

        &-title {
            font-size: var(--txt__header);
            font-weight: normal;
            text-transform: uppercase;
            color: var(--clr__background-base);
        }
    }

    &__content {
        display: flex;
        flex-flow: column nowrap;
        gap: 0.75rem;
        padding-left: 0.5rem;
    }
}
</style>
