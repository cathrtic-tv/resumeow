<script setup>
defineProps({
    data: { type: Object, default: {} },
});
</script>


<template>
    <div class="subsection">
        <div class="subsection__header">
            <h3 v-if="data.title" class="subsection__header-title">
                <span>{{ data.title }}</span>
                <span v-if="data.company">, </span>
                <span v-if="data.company">{{ data.company }}</span>
            </h3>
            <div v-if="data.location" class="subsection__header-subtitle">
                <span>{{ data.location }}</span>
                <span v-if="data.locationType"> • </span>
                <span v-if="data.locationType">{{ data.locationType }}</span>
            </div>
            <div v-if="data.date" class="subsection__header-date">
                {{ data.date }}
            </div>
        </div>

        <div class="subsection__content">
            <ul class="subsection__content-list">
                <template v-for="detail in data.details">
                    <li v-if="typeof detail === 'object'">
                        <div v-if="detail.icon" class="icon" :style="{ maskImage: `url(/src/assets/icons/${detail.icon})` }"></div>
                        <div v-html="detail.label"></div>
                    </li>
                    <li v-else v-html="detail"></li>
                </template>
            </ul>
            <slot></slot>
        </div>
    </div>
</template>


<style lang="scss" scoped>
.subsection {
    &__header {
        display: flex;
        flex-flow: row wrap;
        align-items: center;
        margin-bottom: 0.25rem;

        &-title {
            white-space: pre;
            flex: 0 0 70%;
            display: flex;
            justify-content: start;
            font-size: var(--txt__header);
            font-weight: bold;
        }

        &-subtitle {
            white-space: pre;
            flex: 0 0 70%;            
            display: flex;
            justify-content: start;
            font-weight: bold;
            color: var(--clr__primary-base);
        }

        &-date {
            flex: 0 0 30%;
            display: flex;
            justify-content: end;
            white-space: nowrap;
            font-weight: bold;
            color: var(--clr__primary-base);
        }
    }

    &__content {
        &-list {
            display: flex;
            flex-flow: column nowrap;
            gap: 0.2rem;
            padding-left: 2rem;

            ::marker {
                color: var(--clr__primary-base);
            }
        }
    }

    &.is--labels {
        .subsection  {
            &__header {
                margin-bottom: 0.3rem;
            }

            &__content {
                &-list {
                    flex-flow: row wrap;
                    gap: 0.5rem;
                    padding-left: 0.5rem;

                    li {
                        display: flex;
                        flex-flow: row nowrap;
                        align-items: center;
                        height: 1.5rem;
                        padding: 0rem 0.5rem;
                        border-radius: 0.25rem;
                        background: var(--clr__background-subtle);
                    }
                    
                    &:has(li .icon) {
                        gap: 0.5rem 0;

                        li {
                            gap: 0.5rem;
                            padding: 0 0.25rem;
                            background: none;
                            font-weight: bold;
                            min-width: 50%;
        
                            .icon {
                                min-width: 1.5rem;
                                min-height: 1.5rem;
                                mask-repeat: no-repeat;
                                mask-position: center;
                                mask-size: contain;
                                background: var(--clr__primary-base);
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>
