<template>

    <div class="home">

        <h2> Dashboard : {{numberOfPets}} Pet(s) </h2>

        <div>

            <p v-if='numberOfDogs !== 0'> {{ numberOfDogs }} Dog(s) </p>
            <p v-if='numberOfCats !== 0'> {{ numberOfCats }} Cat(s) </p>

        </div>

    </div>

</template>

<script>

    export default {
        name: "Dashboard",
        computed: {
            numberOfPets(){
                return this.$store.getters.numberOfPets;
            },
            numberOfDogs(){
                return this.$store.getters.numberOfDogs;
            },
            numberOfCats(){
                return this.$store.getters.numberOfCats;
            }
        }
    }

</script>