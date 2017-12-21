<template>
    <v-layout row wrap>
        <v-flex xs12 md3 ma-5 sm8 v-for="data in list" :key="data.id" space-between>
            <v-card>
                <template v-for="">
                    <v-card-media src="" height="300px">
                        <v-layout column class="media">
                            <v-card-title class="grey--text pl-5 pt-5">
                                <div class="display-1 pl-5 pt-5">Ali Conners</div>
                            </v-card-title>
                        </v-layout>
                    </v-card-media>
                </template>
                <v-list two-line>
                    <v-list-tile>
                        <v-list-tile-action>
                            <v-icon color="indigo">location_on</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title color="grey--text">
                                <strong>
                                    <pre>{{data.title}}</pre>
                                </strong>
                            </v-list-tile-title>
                            <span v-for="location in data.realestateSummary" :key="location.id">
                                <v-list-tile-sub-title>{{location.city}}</v-list-tile-sub-title>
                            </span>
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-divider inset></v-divider>
                    <v-list-tile>
                        <v-list-tile-action></v-list-tile-action>
                        <v-list-tile-content>
                            <span mt-2 v-for="location in data.realestateSummary" :key="location.id">
                                <v-list-tile-title>{{location.postalCode}}</v-list-tile-title>
                                <v-list-tile-sub-title>{{location.street}}</v-list-tile-sub-title>
                            </span>
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-divider inset></v-divider>
                </v-list>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
    import axios from 'axios';
    export default {
        data() {
            return {
                list: ''
            };
        },
        methods: {
            getlist() {
                axios
                    .get('https://api.mcmakler.de/v1/advertisements')
                    .then(response => {
                        this.list = response.data.data;
                        this.list.length = 10;
                        console.log(this.list);
                    });
            }
        },
        beforeMount() {
            this.getlist();
        }
    };
</script>
<style>
    .media {
        height: 100%;
        margin: 0;
    }
</style>
