<template>
    <p>Triple Result: {{ counter }}</p>
</template>

<script>
    export default {
        computed: {
            counter() {
                return this.$store.getters.tripleCounter
            }
        }
    }
</script>