<template>
    <div class="almond">
        <p>Triple Result: {{ counter }}</p>
    </div>
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

<style>
 .almond {
     background-color: blanchedalmond;
 }
</style>
