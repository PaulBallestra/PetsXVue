<template>
    <!-- Affichage des chats -->
    <div class="about">
        <h1> Cats </h1>
        <ul style="list-style: none;">

            <li v-for="pet in pets">
                <p v-if="pet.species === 'Cat'">  Name :
                    <strong>
                        <router-link :to="{name: 'PetsCat', params: {id: pets.indexOf(pet)}}">
                            {{pet.name}}
                        </router-link>
                    </strong> | Birth Year : <strong> {{pet.birthYear}} </strong>  | Species : <strong> {{pet.species}} </strong> </p>
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