<script setup>
defineProps({
    data: { type: Object, default: {} },
});
</script>


<template>
    <div class="subsection">
        <div class="subsection__header">
            <div class="subsection__header-left">
                <template v-if="data.company">
                    <h3>
                        <a v-if="data.link" :href="data.link" target="_blank">
                            {{ data.company }}
                            <span v-if="data.linkLabel">({{ data.linkLabel }})</span>
                        </a>
                        <span v-else>{{ data.company }}</span>                    
                    </h3>
                    <div v-if="data.title">{{ data.title }}</div>
                </template>
                <template v-else>
                    <h3>
                        <a v-if="data.link" :href="data.link" target="_blank">
                            {{ data.title }}
                            <span v-if="data.linkLabel">({{ data.linkLabel }})</span>
                        </a>
                        <span v-else>{{ data.title }}</span>       
                    </h3>
                </template>
            </div>

            <div class="subsection__header-right">
                <div v-if="data.date">{{ data.date }}</div>
                <div v-if="data.location">
                    <span>{{ data.location }}</span>                    
                    <span v-if="data.locationType"> • </span>
                    <span v-if="data.locationType">{{ data.locationType }}</span>
                </div>
            </div>
        </div>

        <div class="subsection__content">
            <ul class="subsection__content-list">
                <template v-for="detail in data.details">
                    <li v-if="typeof detail === 'object'" v-html="detail.label"></li>
                    <li v-else v-html="detail"></li>
                </template>
            </ul>
            <slot></slot>
        </div>
    </div>
</template>


<style lang="scss" scoped>
.subsection {
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
            }

            a {
                text-decoration: none;
                color: var(--clr__text-base);

                > span {
                    color: var(--clr__text-subtle);
                }
            }
        }

        &-left {
            align-items: start;

            > :last-child {
                font-weight: bold;
                font-style: normal;
                gap: 0.25rem;
            }

            > :first-child {
                font-weight: bold;
                font-style: normal;
                gap: 0;
            }
        }

        &-right {
            align-items: end;

            > :last-child {
                font-weight: normal;
                font-style: italic;
                gap: 0.25rem;
            }

            > :first-child {
                font-weight: bold;
                font-style: normal;
                gap: 0;
            }
        }
    }

    &__content {
        padding-top: 0rem;

        &-list {
            padding-left: 1.5rem;
        }
    }

    &.is--series {
        display: flex;
        align-items: end;

        & + & {
            padding-top: 0;
        }

        .subsection {
            &__header {
                padding-right: 0.25rem;

                &-left {
                    > :last-child::after {
                        content: ': ';
                    }
                }

                &-right {
                    display: none;
                }
            }

            &__content {
                padding-top: 0;

                &-list {
                    padding-left: 0;
                    list-style: none;
                    display: flex;

                    li {
                        padding: 0;

                        &:not(:first-child)::before {
                            content: ', ';
                        }
                    }
                }
            }
        }
    }
}
</style>
