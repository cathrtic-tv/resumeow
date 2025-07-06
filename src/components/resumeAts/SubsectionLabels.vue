<script setup>
defineProps({
    data: { type: Object, default: {} },
});
</script>


<template>
    <div class="subsection-labels">
        <h3 class="subsection-labels__title">{{ data.title }}:</h3>

        <template v-for="detail in data.details">
            <span class="subsection-labels__item">{{ detail.label}}<span class="subsection-labels__item-comma">, </span></span>            
        </template>
        <slot></slot>
    </div>
</template>


<style lang="scss" scoped>
.subsection-labels {
    display: flex;
    flex-flow: row wrap;

    &__title {
        font-weight: bold;
        margin-right: 0.25rem;
    }

    &__item {
        &-comma {        
            white-space: pre;
        }

        &:last-child &-comma {
            display: none;
        }
    }

}
</style>
