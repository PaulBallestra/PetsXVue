<template>

    <div class="home">

        <h2> Adopt New Friend </h2>

        <form>

            <label for="name"> Name </label>
            <input type="text" name="specs" id="petname"/>

            <label for="specs"> Specs </label>
            <select id="petspecs" name="specs">

                <option value="dogs"> Dogs </option>
                <option value="cats"> Cats </option>

            </select>

            <label for="birthyear"> Birth Year </label>
            <input type="number" min="0" name="birthyear" id="petbirthyear">

            <br>
            <br>

            <button type="submit">Submit</button>

        </form>

    </div>

</template>