<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Vuex Basics</h1>
                <app-result></app-result>
                <app-another-result></app-another-result>
                <app-triple-result></app-triple-result>
                <hr>
                <app-counter></app-counter>
            </div>
        </div>
    </div>
</template>

<script>
    import Counter from './components/Counter.vue';
    import Result from './components/Result.vue';
    import AnotherResult from './components/AnotherResult.vue';
    import TripleResult from './components/TripleResult.vue';

    export default {
        components: {
            appCounter: Counter,
            appResult: Result,
            appAnotherResult: AnotherResult,
            appTripleResult: TripleResult
        }
    }
</script>

