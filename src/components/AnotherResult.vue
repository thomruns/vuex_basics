<template>
    <div>
        <p>Another Counter is: {{ doubleCounter }}</p>
        <p>Number of clicks: {{ stringCounter }}</p>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
    export default {
        computed: { // make a mapGetters object so that custom computed properties can still be written
            ...mapGetters([ // using ES6 spread operator (...) to make key/value pairs
                'doubleCounter',
                'tripleCounter',
                'stringCounter'
            ])
        }
    }
</script>