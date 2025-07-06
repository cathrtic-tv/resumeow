<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';

import Section from '@/components/resumeDesigned/Section.vue';
import SubsectionRegular from '@/components/resumeDesigned/SubsectionRegular.vue';
import SubsectionLabels from '@/components/resumeDesigned/SubsectionLabels.vue';
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
</script>


<template>
    <header class="header">
        <div class="header__background"></div>

        <div class="header__main">
            <h1 class="header__main-name">{{ jsonData.about.name }}</h1>
            <h2 class="header__main-title">{{ jsonData.about.profession }}</h2>
            <p class="header__main-description">                
                <span v-for="detail in jsonData.about.details" v-html="`${detail} `"></span>
            </p>
        </div>

        <ul class="header__contacts">
            <li class="header__contacts-contact">
                <div class="header__contacts-icon" :style="{ maskImage: `url(/src/assets/icons/Material_Design_Icons/home.svg)` }"></div>
                <span class="header__contacts-label">{{ jsonData.about.location }}</span>
            </li>
            <li class="header__contacts-contact">
                <div class="header__contacts-icon" :style="{ maskImage: `url(/src/assets/icons/Material_Design_Icons/email.svg)` }"></div>
                <a class="header__contacts-label" :href="`mailto:${jsonData.about.email}`" target="_blank">{{ jsonData.about.email }}</a>
            </li>
            <li class="header__contacts-contact">
                <div class="header__contacts-icon" :style="{ maskImage: `url(/src/assets/icons/Material_Design_Icons/phone.svg)` }"></div>
                <a class="header__contacts-label" :href="`tel:${jsonData.about.phone}`" target="_blank">{{ jsonData.about.phoneLabel }}</a>
            </li>
            <li class="header__contacts-contact">
            </li>
            <li v-for="social in sortContent(jsonData.about.socials)" class="header__contacts-contact">
                <div class="header__contacts-icon" :style="{ maskImage: `url(/src/assets/icons/${social.icon})` }"></div>
                <a class="header__contacts-label" :href="social.link" target="_blank">{{ social.linkLabel }}</a>
            </li>
        </ul>
    </header>

    <div class="wrapper">
        <main class="main">
            <Section v-for="section in sortContent(jsonData.mainSections)" :key="section.title" :data="section">
                <SubsectionRegular v-for="subsection in sortContent(section.subsections)" :key="subsection.title" :data="subsection"></SubsectionRegular>
            </Section>
        </main>

        <aside class="aside">
            <Section v-for="section in sortContent(jsonData.asideSections)" :key="section.title" :data="section">
                <SubsectionLabels v-for="subsection in sortContent(section.subsections)" :key="subsection.title" :data="subsection"></SubsectionLabels>
            </Section>
            <Section :data="{ title: 'References', icon: 'Material_Design_Icons/contacts.svg' }">
                Available upon request.
            </Section>
        </aside>
    </div>
</template>


<style lang="scss">
.view--designed-engimo {
    --txt__display: 2.25rem;
    --txt__title: 1.2rem;
    --txt__header: 1rem;
    --txt__body: 0.825rem;

    font-family: Arial;
    line-height: 1.25;
    padding: 1rem;

    .header {
        position: relative;
        z-index: 0;
        display: flex;
        flex-flow: row nowrap;
        padding: 2rem 2rem 2rem 2rem;
        color: var(--clr__background-base);
    
        &__background {
            position: absolute;
            inset: 0;
            z-index: -1;
            filter: url(#round);
    
            &::before {
                content: "";
                position: absolute;
                inset: 0;
                background: var(--clr__secondary-base);
                clip-path: polygon(0% calc(100% - 0.5rem), 0% 0%, 100% 0%, 100% calc(100% - 2.25rem));
            }
        }
    
        &__main {
            flex: 0 0 65%;
            display: flex;
            flex-flow: column nowrap;
            padding-right: 40px;
    
            &-name {
                font-size: var(--txt__display);
                font-weight: bold;
                line-height: 2.5rem;
                margin-left: -0.1rem;
            }
    
            &-title {
                font-weight: normal;
                font-size: var(--txt__title);
                text-transform: uppercase;
                color: var(--clr__primary-base);
            }
    
            &-description {
                margin-top: 1rem;
                line-height: 1.5rem;
            }
        }
    
        &__contacts {
            flex: 0 0 35%;
            display: flex;
            flex-flow: column nowrap;
            padding-bottom: 2rem;
            justify-content: center;
    
            &-contact {
                display: flex;
                flex-flow: row-reverse nowrap;
                align-items: center;
                height: 1.5rem;
                gap: 0.75rem;
            }
    
            &-label {
                color: var(--clr__background-base);
                text-decoration: none;
                white-space: nowrap;
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
    
    .wrapper {
        padding: 1rem 0;
        display: flex;
        flex-flow: row nowrap;
    }
    
    .main {
        padding-left: 1.5rem;
        padding-right: 3rem;
        flex: 0 0 65%;
    }
    
    .aside {
        padding-right: 1.75rem;
        flex: 0 0 35%;

        .section:last-of-type {
            .section__content {
                padding: 0.25rem 1rem;
                font-weight: bold;
            }
        }
    }
}
</style>
