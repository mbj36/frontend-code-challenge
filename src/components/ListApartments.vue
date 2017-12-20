<template>

</template>
<script>
    import axios from 'axios';
    export default {
        data() {
            return {};
        },
        methods: {
            getlist() {
                axios
                    .get('https://api.mcmakler.de/v1/advertisements')
                    .then(response => {
                        console.log(response);
                    });
            }
        },
        created() {
            this.getlist();
        }
    };
</script>
<style>

</style>
