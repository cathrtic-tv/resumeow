<script setup>
defineProps({
    data: { type: Object, default: {} },
});
</script>


<template>
    <div class="subsection-regular">
        <div class="subsection-regular__header">
            <div class="subsection-regular__header-left">
                <template v-if="data.company">
                    <h3>
                        <span>{{ data.company }}</span>
                        <a v-if="data.link" :href="data.link" target="_blank">({{ data.linkLabel }})</a>                                      
                    </h3>
                    <div v-if="data.title">{{ data.title }}</div>
                </template>
                <template v-else>
                    <h3>
                        <span>{{ data.title }}</span>
                        <a v-if="data.link" :href="data.link" target="_blank">({{ data.linkLabel }})</a>       
                    </h3>
                </template>
            </div>

            <div class="subsection-regular__header-right">
                <div v-if="data.date">{{ data.date }}</div>
                <div v-if="data.location">
                    <span>{{ data.location }}</span>                    
                    <span v-if="data.locationType"> • </span>
                    <span v-if="data.locationType">{{ data.locationType }}</span>
                </div>
            </div>
        </div>

        <div class="subsection-regular__content">
            <ul class="subsection-regular__content-list">
                <template v-for="detail in data.details">
                    <li v-html="detail"></li>
                </template>
            </ul>
            <slot></slot>
        </div>
    </div>
</template>


<style lang="scss" scoped>
.subsection-regular {
    & + & {
        padding-top: 0.5rem;
    }

    &__header {
        display: flex;
        justify-content: space-between;

        &-left, &-right {
            display: flex;
            flex-flow: column nowrap;

            > * {
                display: flex;
                align-items: center;
                gap: 0.25rem;
            }

            a {
                text-decoration: none;
                color: var(--clr__text-subtle);
            }
        }

        &-left {
            align-items: start;

            > :first-child {
                font-weight: bold;
                font-style: normal;
            }

            > :last-child {
                font-weight: bold;
                font-style: normal;
            }
        }

        &-right {
            align-items: end;

            > :first-child {
                font-weight: bold;
                font-style: normal;
            }

            > :last-child {
                font-weight: normal;
                font-style: italic;
            }
        }
    }

    &__content {
        padding-top: 0rem;

        &-list {
            padding-left: 1.5rem;
        }
    }
}
</style>
