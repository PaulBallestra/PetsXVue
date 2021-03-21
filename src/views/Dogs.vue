<template>

    <!-- Affichage des chiens -->
    <div class="about">
        <h1> Dogs </h1>
        <ul style="list-style: none;">

            <li v-for="pet in pets" :key="pet.index">
                <p v-if="pet.species === 'Dog'">  Name :
                    <strong>
                        <router-link :to="{name: 'PetsDog', params: {id: pets.indexOf(pet)}}">
                            {{pet.name}}
                        </router-link>
                    </strong> | Birth Year : <strong> {{pet.birthYear}} </strong>  | Species : <strong> {{pet.species}} </strong> </p>
            </li>

        </ul>
    </div>
</template>

<script>

    export default {
        name: "Dogs",
        computed: {
            pets(){
                return this.$store.getters.pets;
            }
        }
    }

</script>
