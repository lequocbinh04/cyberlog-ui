<template>
    <component :is="as">
        <div @mouseenter="(e) => hoverHandler({ target: e.target })">
            <slot></slot>
        </div>
    </component>
</template>

<script setup lang="ts">
import { inject } from 'vue';


defineProps({
    as: {
        type: String,
        default: "div"
    }
})

const { hoverHandler }: {
    hoverHandler: ({ target }: { target: EventTarget | null }) => void
} = inject("ui-tabs") as any;


</script>