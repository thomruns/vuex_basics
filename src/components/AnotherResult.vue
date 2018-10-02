<template>
    <div class="third">
        <p>Another Counter Result is: {{ getCounter }}</p>
        <p>Number of clicks: {{ stringCounter }}</p>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
    export default {
        computed: { // make a mapGetters object so that custom computed properties can still be written
            ...mapGetters([ // using ES6 spread operator (...) to make key/value pairs
                'getCounter',
                'tripleCounter',
                'stringCounter'
            ])
        }
    }
</script>
    
<style>
.third {
        background-color: aquamarine;
    }
</style>
