<template>
    <div>
        <header-component></header-component>
        <br>
        <br>
        <br>
        <list-apartment></list-apartment>
    </div>
</template>
<script>
    import HeaderComponent from './HeaderComponent';
    import ListApartments from './ListApartments';
    export default {
        components: {
            headerComponent: HeaderComponent,
            listApartment: ListApartments
        }
    };
</script>
<style>

</style>
