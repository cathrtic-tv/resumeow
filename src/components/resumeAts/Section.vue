<script setup>
defineProps({
    data: { type: Object, default: {} },
});
</script>


<template>
    <section class="section">
        <div class="section__header">
            <h2 class="section__header-title">{{ data.title }}</h2>
        </div>

        <div class="section__content">
            <slot></slot>
        </div>
    </section>
</template>


<style lang="scss" scoped>
.section {
    padding-top: 0.75rem;

    & + & {
        padding-top: 0.75rem;
    }

    &__header {
        border-bottom: 2px solid var(--clr__text-base);
        
        &-title {
            font-size: var(--txt__title);
            font-weight: bold;
            text-transform: uppercase;
        }
    }

    &__content {
        padding-top: 0.5rem;
    }
}
</style>
