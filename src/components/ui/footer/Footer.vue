<script setup>
import ButtonHybrid from '@/components/ui/button/ButtonHybrid.vue';
import ButtonIcon from '@/components/ui/button/ButtonIcon.vue';
</script>


<template>
    <footer class="footer">
        <div class="footer__left">
            From <a href="https://github.com/cathrtic-tv" target="_blank">CathRTic</a> with 💜
        </div>
        <div class="footer__right">
            <ButtonIcon class="is--rounded is--transparent" href="https://github.com/cathrtic-tv" target="_blank" icon="Simple_Icons/github.svg"></ButtonIcon>
            <ButtonHybrid class="is--rounded" href="https://ko-fi.com/CathRTic_tv" target="_blank" icon="Simple_Icons/kofi.svg">
                Support me on ko-fi
            </ButtonHybrid>
        </div>
    </footer>
</template>


<style lang="scss">
.footer {
    margin-top: auto;
    padding-top: 3rem;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;

    &__left {
        display: flex;
        flex-flow: row nowrap;
        align-items: end;
        gap: 0.3rem;

        a {
            color: var(--clr__primary-base);
            text-decoration: none;
        }
    }

    &__right {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        gap: 0.5rem;
    }
}
</style>
