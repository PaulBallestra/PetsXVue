<template>

    <div class="home">

        <h2> Adopt New Friend </h2>

        <form>

            <label for="petname"> Name </label>
            <input type="text" name="petname" id="petname"/>

            <label for="petspecs"> Specs </label>
            <select id="petspecs" name="petspecs">

                <option value="Dog" selected> Dog </option>
                <option value="Cat"> Cat </option>

            </select>

            <label for="petbirthyear"> Birth Year </label>
            <input type="number" min="0" name="petbirthyear" id="petbirthyear">

            <br>
            <br>

            <button @click="addPets">Submit</button>

        </form>

    </div>

</template>

<script>

    export default {
        name: 'PetsForm',
        methods: {

            //Fonction d'ajout d'un pet
            addPets: function(event){

                event.preventDefault();

                let petname = document.getElementById('petname').value;
                let petspecs = document.getElementById('petspecs').value;
                let petbirthyear = document.getElementById('petbirthyear').value;

                //Si les champs sont rempli alors on ajoute
                if(petname !== "" && petbirthyear !== "")
                    this.$store.commit('addPets', {'name': petname, 'species': petspecs, 'birthYear': petbirthyear})

                //console.log(this.$store.state.pets)
            }
        }
    }

</script>