<template>

    <div class="home">

        <h2> Dashboard </h2>

        <div>

            <h4> {{numberOfPets}} Pets </h4>

        </div>

    </div>

</template>

<script>

    export default {
        name: "Dashboard",
        computed: {
            numberOfPets(){
                return this.$store.getters.numberOfPets;
            }
        }
    }

</script>