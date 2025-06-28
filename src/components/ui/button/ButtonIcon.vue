<script setup>
import Button from '@/components/ui/button/Button.vue';

defineProps({
    icon: { type: String, default: "" },
});
</script>


<template>
    <Button class="button-icon">
        <div class="button-icon__icon" :style="{ maskImage: `url(/src/assets/icons/${icon})` }"></div>
        <slot></slot>
    </Button>
</template>


<style lang="scss">
.button-icon {
    height: 2.25rem;
    width: 2.25rem;
    padding: 0;

    &__icon {
        width: 1.5rem;
        height: 1.5rem;
        mask-repeat: no-repeat;
        mask-position: center;
        mask-size: contain;
        background: var(--this-clr__text);
    }
}
</style>
