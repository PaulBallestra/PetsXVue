<template>
    <!-- Affichage des chats -->
    <div class="about">
        <h1> Cats </h1>
        <ul style="list-style: none;">

            <li v-for="pet in pets">
                <p v-if="pet.species === 'Cat'">  Name : {{pet.name}} | Birth Year : {{pet.birthYear}} | Species : {{pet.species}} </p>
            </li>

        </ul>
    </div>

</template>

<script>

    export default {
        name: "Cats",
        computed: {
            pets(){
                return this.$store.getters.pets;
            }
        }
    }

</script>