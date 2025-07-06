<script setup>
defineProps({
    data: { type: Object, default: {} },
});
</script>


<template>
    <div class="subsection-regular">
        <div class="subsection-regular__header">
            <h3 v-if="data.title" class="subsection-regular__header-title">
                <span>{{ data.title }}</span>
                <span v-if="data.company">, </span>
                <span v-if="data.company">{{ data.company }}</span>
            </h3>
            <div v-if="data.location" class="subsection-regular__header-subtitle">
                <span>{{ data.location }}</span>
                <span v-if="data.locationType"> • </span>
                <span v-if="data.locationType">{{ data.locationType }}</span>
            </div>
            <div v-if="data.date" class="subsection-regular__header-date">
                {{ data.date }}
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
}
</style>
