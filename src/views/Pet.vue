<template>

    <div class="home">

        <h1> {{pet.name}} ({{pet.species}}) </h1>
        <p> {{pet.birthYear}} </p>

    </div>

</template>

<script>

    export default {
        name: "Pets",
        computed: {
            pet(){
                return this.$store.getters.getPet(this.$route.params.id);
            },
        }
    }

</script>
