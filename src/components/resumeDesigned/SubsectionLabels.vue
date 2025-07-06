<script setup>
defineProps({
    data: { type: Object, default: {} },
});
</script>


<template>
    <div class="subsection-labels">
        <h3 class="subsection-labels__title">{{ data.title }}</h3>

        <ul class="subsection-labels__list">
            <template v-for="detail in data.details">
                <li class="subsection-labels__item">
                    <div v-if="detail.icon" class="subsection-labels__item-icon" :style="{ maskImage: `url(/src/assets/icons/${detail.icon})` }"></div>
                    <div class="subsection-labels__item-text">{{ detail.label }}</div>
                </li>
            </template>
        </ul>
        <slot></slot>
    </div>
</template>


<style lang="scss" scoped>
.subsection-labels {
    &__title {
        font-size: var(--txt__header);
        font-weight: bold;
        margin-bottom: 0.3rem;
    }

    &__list {
        display: flex;
        flex-flow: row wrap;
        gap: 0.5rem;
        padding-left: 0.5rem;

        &:has(.subsection-labels__item-icon) {
            gap: 0.5rem 0;
        }
    }
    
    &__item {                
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        height: 1.5rem;
        padding: 0rem 0.5rem;
        border-radius: 0.25rem;
        background: var(--clr__background-subtle);
        
        &:has(.subsection-labels__item-icon) {
            gap: 0.5rem;
            padding: 0 0.25rem;
            background: none;
            font-weight: bold;
            min-width: 50%;
        }

        &-icon {
            min-width: 1.5rem;
            min-height: 1.5rem;
            mask-repeat: no-repeat;
            mask-position: center;
            mask-size: contain;
            background: var(--clr__primary-base);
        }
    }
    
}
</style>
