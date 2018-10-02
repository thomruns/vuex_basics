<template>
    <div class="lt-blue">
        <p>Counter is: {{ counter }}</p>
    </div>
    
</template>

<script>
    export default {
        computed: {
            counter() {
                return this.$store.getters.counter
            }
        }
    }
</script>

<style>
.lt-blue {
    background-color: lightblue;
}
</style>