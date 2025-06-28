<template>
    <a v-if="$attrs.href" class="button">
        <slot></slot>
    </a>
    <button v-else class="button" type="button">
        <slot></slot>
    </button>
</template>


<style lang="scss">
.button {
    --this-clr__text: var(--clr__background-base);
    --this-clr__background: var(--clr__primary-base);
    --this-clr__background-hover: var(--clr__primary-subtle);
    --this-clr__background-active: var(--clr__primary-subtler);

    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    border: none;
    outline: none;
    cursor: pointer;
    border-radius: 0.5rem;
    height: 2.25rem;
    padding: 0 0.75rem;
    background: var(--this-clr__background);
    color: var(--this-clr__text);

    &:hover {
        background: var(--this-clr__background-hover);
    }

    &:active {
        background: var(--this-clr__background-active);
    }

    &.is--rounded {
        border-radius: calc(infinity * 1px);
    }

    &.is--transparent {
        --this-clr__text: var(--clr__primary-base);
        --this-clr__background: transparent;
        --this-clr__background-hover: var(--clr__background-subtle);
        --this-clr__background-active: var(--clr__background-subtler);
    }

    &.is--clr-secondary {
        --this-clr__text: var(--clr__background-base);
        --this-clr__background: var(--clr__secondary-base);
        --this-clr__background-hover: var(--clr__secondary-subtle);
        --this-clr__background-active: var(--clr__secondary-subtler);
    }

    &.is--clr-secondary.is--transparent {
        --this-clr__text: var(--clr__secondary-base);
        --this-clr__background: transparent;
        --this-clr__background-hover: var(--clr__background-subtle);
        --this-clr__background-active: var(--clr__background-subtler);
    }

    &.is--clr-modifier {
        --this-clr__text: var(--clr__background-base);
        --this-clr__background: linear-gradient(135deg, var(--clr__primary-base) 85%, var(--clr__secondary-base) 85%);
        --this-clr__background-hover: linear-gradient(135deg, var(--clr__primary-subtle) 85%, var(--clr__secondary-subtle) 85%);
        --this-clr__background-active: linear-gradient(135deg, var(--clr__primary-subtler) 85%, var(--clr__secondary-subtler) 85%);
    }
}
</style>