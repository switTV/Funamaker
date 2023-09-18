<script>
    import {username} from "../stores/info_input"

    let valor_input = ""
    console.log(valor_input)

    function cambiar_valor_input() {
        username.set(valor_input)
        console.log($username)
    }
</script>

<style>
    input {
        height: 60px;
        width: 60%;
        border: none;
        background-color: #E9FFF9;
        border-radius: 5px;

        font-family: Poppins, sans-serif;
        font-weight: 600;
        font-size: 16px;

        padding-left: 10px;
    }
</style>

<!-- markup (zero or more items) goes here -->

<div class="Input">
    <h2>Username</h2>
    <input type="text" name="username" on:change={cambiar_valor_input} id="username_input" bind:value={valor_input} placeholder="@">
</div>