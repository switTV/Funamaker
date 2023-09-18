<script lang="ts">
    export let button_width:number
    export let button_text:string
    export let button_color:string
</script>

<style>
    a {
        height: 50px;
        display: block;

        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 10px;
        margin-top: 10px;
        border-radius: 5px;

        font-size: 12px;
        font-family: "Poppins", sans-serif;
        color: #000;
        text-decoration: none;
    }

    @media screen and (max-width: 768px) {
        a {
            width: 200px;
        }
    }
</style>

<!-- markup (zero or more items) goes here -->

<div class="Button">
    <a style="width: {button_width}px; background-color: #{button_color}" href="#">{button_text}</a>
</div>