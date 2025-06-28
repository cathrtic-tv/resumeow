<script setup>
import Button from '@/components/ui/button/Button.vue';

defineProps({
    icon: { type: String, default: "" },
});
</script>


<template>
    <Button class="button-hybrid">
        <div class="button-hybrid__icon" :style="{ maskImage: `url(/src/assets/icons/${icon})` }"></div>
        <div class="button-hybrid__text"><slot></slot></div>
    </Button>
</template>


<style lang="scss">
.button-hybrid {
    gap: 0.5rem;

    &__text {
        font-weight: bold;
    }
    
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
