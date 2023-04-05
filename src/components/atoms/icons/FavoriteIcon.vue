<template>
    <span class="fav" :class="{ checked: state }" @click="checking">
        <div class="fav__checkmark">
            <svg viewBox="0 0 256 256">
                <rect fill="none" height="256" width="256"></rect>
                <path
                    d="M224.6,51.9a59.5,59.5,0,0,0-43-19.9,60.5,60.5,0,0,0-44,17.6L128,59.1l-7.5-7.4C97.2,28.3,59.2,26.3,35.9,47.4a59.9,59.9,0,0,0-2.3,87l83.1,83.1a15.9,15.9,0,0,0,22.6,0l81-81C243.7,113.2,245.6,75.2,224.6,51.9Z"
                    stroke-width="20px" stroke="#FFF" fill="none"></path>
            </svg>
        </div>
    </span>
</template>

<script>
export default {
    name: 'FavoriteIcon',
    emits: ['update:modelValue'],
    props: {
        modelValue: {
            type: Boolean,
            default: false
        }
    },
    data () {
        return {
            state: this.modelValue
        }
    },
    methods: {
        checking () {
            this.state = !this.state
            this.$emit('update:modelValue', this.state)
        }
    }
}
</script>

<style lang="scss">
.fav {
    position: relative;
    height: max-content;
    font-size: 6px;
    transition: 100ms;
    cursor: pointer;

    &__checkmark {
        top: 0;
        left: 0;
        height: 2em;
        width: 2em;
        transition: 100ms;
        animation: dislike 400ms ease;
    }

    &.checked {
        .fav__checkmark {
            animation: like 400ms ease;
            
            path {
                fill: #FF5353;
                stroke-width: 0;
            }
        }
    }

    &:hover {
        transform: scale(1.1);
    }


}

@keyframes like {
    0% {
        transform: scale(0);
    }

    50% {
        transform: scale(1.2);
    }

    100% {
        transform: scale(1);
    }
}

@keyframes dislike {
    0% {
        transform: scale(0);
    }

    50% {
        transform: scale(1.2);
    }

    100% {
        transform: scale(1);
    }
}
</style>