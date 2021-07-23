<template>
    <div>
        <div class="header">
            <label for=""></label>
            <div class="error"></div>
        </div>
        <div class="input-wrapper">
            <base-icon></base-icon>
            <base-input></base-input>
        </div>

    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BaseInput from './BaseInput.vue';
import BaseIcon from './BaseIcon.vue';
export default defineComponent({
    name: 'FormField',
    components: {
        BaseInput,
        BaseIcon
    }
});
</script>