<script setup>
import { ref, onMounted } from 'vue';

import Hero from '@/components/ui/hero/Hero.vue';
import Footer from '@/components/ui/footer/Footer.vue';
import ButtonIcon from '@/components/ui/button/ButtonIcon.vue';

const iconsMd = ref([]);
const iconsMdFiles = import.meta.glob('/src/assets/icons/Material_Design_Icons/*.svg');
const iconsSi = ref([]);
const iconsSiFiles = import.meta.glob('/src/assets/icons/Simple_Icons/*.svg');

onMounted(async () => {
    iconsMd.value = Object.keys(iconsMdFiles).map(path => {
        return path.replace('/src/assets/icons/', '');
    });
    iconsSi.value = Object.keys(iconsSiFiles).map(path => {
        return path.replace('/src/assets/icons/', '');
    });
});

const copyToClipboard = (button, toCopy) => {
    navigator.clipboard.writeText(toCopy);
    button.classList.add('copied');
    setTimeout(() => { button.classList.remove('copied'); }, 1000);
};
</script>


<template>    
    <Hero></Hero>

    <main class="content">        
        <div class="icon-group">
            <h2 class="icon-group__title">Material Design Icons</h2>
            <ul class="icon-group__list">
                <template v-for="icon in iconsMd" :key="icon">
                    <li class="icon-group__item">
                        <ButtonIcon :icon="icon" @click="e => copyToClipboard(e.currentTarget, icon)">
                            <span class="button__tooltip">Copied!</span>
                        </ButtonIcon>
                    </li>
                </template>
            </ul>
        </div>
    
        <div class="icon-group">
            <h2 class="icon-group__title">Simple Icons</h2>
            <ul class="icon-group__list">
                <template v-for="icon in iconsSi" :key="icon">
                    <li class="icon-group__item">
                        <ButtonIcon class="is--clr-secondary" :icon="icon" @click="e => copyToClipboard(e.currentTarget, icon)">
                            <span class="button__tooltip">Copied!</span>
                        </ButtonIcon>
                    </li>
                </template>
            </ul>
        </div>
    </main>
    
    <Footer></Footer>
</template>


<style lang="scss">
.view--icons {
    --txt__display: 2.75rem;
    --txt__title: 1.75rem;
    --txt__header: 1.25rem;
    --txt__body: 1rem;

    font-family: Arial;
    line-height: 1.5;
    padding: 2rem;

    .content {
        display: flex;
        flex-flow: column nowrap;
        gap: 2rem;
    }

    .icon-group {
        &__title {
            font-size: var(--txt__header);
            padding: 0 0.5rem;
            margin-bottom: 0.5rem;
        }

        &__list {
            list-style: none;
            display: flex;
            flex-flow: row wrap;  
            justify-content: space-between;
            gap: 0.2rem;
            padding: 0 0.5rem;
        }

        &__item {
            .button {         
                &__tooltip {
                    position: absolute;
                    pointer-events: none;
                    transition: opacity 0.2s ease;
                    z-index: 1;
                    opacity: 0;
                    inset: 100% auto auto auto;
                    margin-top: -0.2rem;
                    background: var(--clr__secondary-base);
                    color: var(--clr__background-base);
                    padding: 0.2rem 0.5rem;
                    border-radius: 0.25rem;
                }
                
                &.copied {
                    .button__tooltip {
                        opacity: 1;
                    }
                }
            }
        }
    }
}
</style>
