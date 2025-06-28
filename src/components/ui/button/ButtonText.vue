<script setup>
import Button from '@/components/ui/button/Button.vue';
</script>


<template>
    <Button class="button-text">
        <div class="button-text__text"><slot></slot></div>
    </Button>
</template>


<style lang="scss">
.button-text { 
    height: 2rem;

    &__text {
        padding-top: 2px;
        font-weight: bold;
    }
}
</style>
