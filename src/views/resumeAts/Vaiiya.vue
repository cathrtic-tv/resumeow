<script setup>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';

import Section from '@/components/resumeAts/Section.vue';
import SubsectionRegular from '@/components/resumeAts/SubsectionRegular.vue';
import SubsectionLabels from '@/components/resumeAts/SubsectionLabels.vue';
import { loadJsonData, sortContent } from '@/utils/resumeUtils.js';

const route = useRoute();
const jsonData = ref({
    about: { name: '', profession: '', details: [], email: '', location: '', phone: '', socials: [] },
    asideSections: [],
    mainSections: []
});

async function loadJson() {
    jsonData.value = await loadJsonData(route.path);
}
loadJson();

watch(() => jsonData.value.about.name,
    (newName) => {        
        document.title = `${newName} - Résumé`;
    }
);
</script>


<template>
    <header class="header">
        <h1 class="header__header">{{ jsonData.about.name }}</h1>

        <div class="header__subheader">
            <div v-if="jsonData.about.profession" class="header__subheader-item">{{ jsonData.about.profession }}</div>
            <div v-if="jsonData.about.location" class="header__subheader-item">{{ jsonData.about.location }}</div>
        </div>
            
        <ul class="header__contacts">
            <li class="header__contacts-item">
                <a class="header__contacts-label" :href="`mailto:${jsonData.about.email}`" target="_blank">{{ jsonData.about.email }}</a>
            </li>
            <li class="header__contacts-item">
                <a class="header__contacts-label" :href="`tel:${jsonData.about.phone}`" target="_blank">{{ jsonData.about.phoneLabel }}</a>
            </li>
            <li v-for="social in sortContent(jsonData.about.socials)" class="header__contacts-item">                
                <a class="header__contacts-label" :href="social.link" target="_blank">{{ social.linkLabel }}</a>
            </li>
        </ul>
    </header>

    <div class="wrapper">
        <Section :data="{ title: '' }">
            <p>
                <span v-for="detail in jsonData.about.details" v-html="`${detail} `"></span>
            </p>
        </Section>
        <Section v-for="section in sortContent(jsonData.asideSections)" v-show="section.title == 'Skills'" :key="section.title" :data="section">
            <SubsectionLabels v-for="subsection in sortContent(section.subsections)" :key="subsection.title" :data="subsection"></SubsectionLabels>
        </Section>
        <Section v-for="section in sortContent(jsonData.mainSections)" :key="section.title" :data="section">
            <SubsectionRegular v-for="subsection in sortContent(section.subsections)" :key="subsection.title" :data="subsection"></SubsectionRegular>
        </Section>
        <Section :data="{ title: 'References' }">
            <p>Available upon request.</p>
        </Section>
    </div>
</template>


<style lang="scss">
.view--ats-vaiiya {
    --txt__display: 2.25rem;
    --txt__title: 1rem;
    --txt__header: 0.825rem;
    --txt__body: 0.825rem;

    font-family: Garamond;
    line-height: 1.25;
    padding: 1.5rem 2.5rem 2rem 2.5rem;

    b {
        font-weight: normal;
    }

    .header {
        &__header {
            font-size: var(--txt__display);
            display: flex;
            justify-content: center;
        }

        &__subheader, &__contacts {
            display: flex;
            flex-flow: row nowrap;
            justify-content: center;
            list-style-type: none;
            padding: 0;

            &-item {
                display: flex;
                align-items: center;
                
                &:not(:first-child)::before {
                    content: ' | ';
                    padding: 0 0.5rem;
                }
                
                a {
                    text-decoration: none;
                    color: var(--clr__text-subtle);
                }
            }
        }

        &__subheader {
            margin-top: -0.25rem;
            margin-bottom: 0.125rem;
            font-weight: bold;
            font-size: var(--txt__title);
        }
    }
}
</style>
