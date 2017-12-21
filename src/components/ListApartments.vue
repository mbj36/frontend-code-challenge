<template>
    <v-layout row wrap>
        <v-flex pt-5 xs12 md3 ma-5 sm8 v-for="data in list" :key="data.id" space-between>
            <v-card>
                <template>
                    <v-card-media src="https://d3e02gns9oqhhr.cloudfront.net/assets/expose_v2/578d1623ac92b204088b4568_variant_asset580e4605f1682_inventoryM.jpg" height="300px">
                        <v-layout column class="media">
                            <v-card-title class="grey--text pl-3 pt-3">
                                <v-btn color="white">
                                    <span v-for="location in data.realestateSummary" :key="location.id">
                                        {{location.street}}
                                    </span>
                                </v-btn>
                            </v-card-title>
                        </v-layout>
                    </v-card-media>
                </template>
                <v-list two-line>
                    <v-list-tile>
                        <v-list-tile-action>
                            <v-icon color="blue darken-2">location_on</v-icon>
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
                        <v-list-tile-action>
                            <v-icon color="blue darken-2">local_post_office</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <br>
                            <span v-for="location in data.realestateSummary" :key="location.id">
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
                list: '' //Initialising List variable
            };
        },
        methods: {
            // Calling API to get data

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
            this.getlist(); // Methods should be called before mounting the component
        }
    };
</script>
<style>
    .media {
        height: 100%;
        margin: 0;
    }
</style>
