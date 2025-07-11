<script setup>
import { ref, onMounted } from 'vue';
import { routesResumeAts, routesResumeDesigned } from '@/router';

import Hero from '@/components/ui/hero/Hero.vue';
import Footer from '@/components/ui/footer/Footer.vue';
import ButtonText from '@/components/ui/button/ButtonText.vue';

const dataFiles = import.meta.glob('@/../data/*.json5');
const resumeFiles = ref([]);

const formatFileName = (name) => {
    const addStar = name.startsWith('_');

    name = name.replaceAll('_', '');
    name = name.replaceAll('-', ' ');
    name = name.replace(/([a-z])([A-Z])/g, '$1 $2');

    if (addStar) { name = '★&nbsp;&nbsp;' + name; }
    return name;
};

onMounted(() => {
  resumeFiles.value = Object.keys(dataFiles).map(path => {
        const filename = path.split('/').pop().replace('.json5', '');
        return {
            name: filename,
            path: path,
        };
    });
});
</script>


<template>
    <Hero></Hero>

    <ul class="resume-list">
        <li class="resume-list__item">
            <div class="resume-list__item-name">★★&nbsp;&nbsp;Default</div>
            <div class="resume-list__item-buttons">
                <template v-for="route in routesResumeAts">
                    <ButtonText :class="`is--clr-modifier mod--clr-${route.name}`" :href="`${route.urlPath}`">{{ route.filename }}</ButtonText>
                </template>
                <span>|</span>
                <template v-for="route in routesResumeDesigned">
                    <ButtonText :class="`is--clr-modifier mod--clr-${route.name}`"  :href="`${route.urlPath}`">{{ route.filename }}</ButtonText>
                </template>
            </div>
        </li>

        <template v-for="file in resumeFiles" :key="file.name">            
            <li class="resume-list__item" v-if="file.name !== '__default'">
                <div class="resume-list__item-name" v-html="formatFileName(file.name)"></div>
                <div class="resume-list__item-buttons">
                    <template v-for="route in routesResumeAts">
                        <ButtonText :class="`is--clr-modifier mod--clr-${route.name}`" :href="`${route.urlPath}/${file.name}`">{{ route.filename }}</ButtonText>
                    </template>
                    <span>|</span>
                    <template v-for="route in routesResumeDesigned">
                        <ButtonText :class="`is--clr-modifier mod--clr-${route.name}`" :href="`${route.urlPath}/${file.name}`">{{ route.filename }}</ButtonText>
                    </template>
                </div>
            </li>
        </template>
    </ul>

    <Footer></Footer>
</template>


<style lang="scss">
.view--home {
    --txt__display: 2.75rem;
    --txt__title: 1.75rem;
    --txt__header: 1.25rem;
    --txt__body: 1rem;
   
    font-family: Arial;
    line-height: 1.5;
    padding: 2rem;
    display: flex;
    flex-flow: column nowrap;

    .resume-list {
        display: flex;
        flex-direction: column;
        gap: 0.25rem;
        margin: 0;
        padding: 0;

        &__item {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 2rem;
            padding: 0.5rem 0.5rem 0.5rem 0.75rem;
            border-radius: 0.5rem;
            background: var(--clr__background-subtle);

            &-name {
                flex: 0 0 fit-content;
                text-transform: uppercase;
                font-weight: bold;            
                width: 10rem;
                padding-left: 0.5rem;
            }

            &-buttons {
                flex: 1 1 auto;
                display: flex;
                flex-flow: row wrap;
                align-items: center;
                justify-content: flex-end;
                gap: 0.5rem;
                text-transform: uppercase;
            }
        }
    }
}
</style>
