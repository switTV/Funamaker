<script>
    import Header from "../components/Header.svelte";
    import Input from "../components/Input.svelte";
    import Button from "../components/Button.svelte";
    import {username} from "../stores/info_input"

    const lista_negra = [
        "gordas", "gorda", 
        "negra", "negras", 
        "judia", "judias", 
        "paraguaya", "paraguayas", 
        "boliviana", "bolivianas", 
        "putas", "puto",
        "negro", "trolo", 
        "putos", "negros", 
        "trolos", "boliviano", 
        "bolivianos", "paraguayo", 
        "paraguayos", "judio",
        "judios", "puta",
        "militares", "videla",
        "desaparecidos", "africanos",
        "africana", "africanas",
        "de%20mierda"
    ]

    const queryend = lista_negra.join("%22%20OR%20%22") + "%22&src=typed_query&f=top";
    
    function funa_normal() {
        window.location.href = `https://twitter.com/search?q=from%3A${$username}%20%20%22${queryend}`
    }
    
    function funa_2018() {
        window.location.href = `https://twitter.com/search?q=from%3A${$username}%20until%3A2018-01-01%20%20%22${queryend}`
    }

</script>

<style>
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100vh;
    }

    .card_container {
        height: 50vh;
        width: 70vw;
        background: #467599;
        background: linear-gradient(145deg, #467599 0%, #9ed8db 100%);
        border-radius: 20px;
        padding-left: 20px;
    }

    .form_container {
        height: 70%;

        display: flex;
        justify-content: center;
        flex-direction: column;
    }

    .form_container_buttons {
        display: flex;
    }

    :global(h1) {
        font-family: "Poppins", sans-serif;
        font-size: 24px;
        color: #fff;
    }
    
    :global(h2) {
        font-family: "Poppins", sans-serif;
        font-weight: 500;
        font-size: 20px;
        line-height: 5px;
        color: #fff;
    }

    @media screen and (max-width: 768px) {
        .form_container_buttons {
            display: flex;
            flex-direction: column;
        }
    }
</style>

<!-- markup (zero or more items) goes here -->

<body>
    <div class="card_container">
        <Header></Header>
        <div class="form_container">
            <Input></Input>
            <div class="form_container_buttons">
                <div class="button1" on:click={funa_normal}>
                    <Button button_width={300} button_color="E9FFF9" button_text="Funar"></Button>
                </div>
                <div class="button2" on:click={funa_2018}>
                    <Button button_width={400} button_color="9ED8DB" button_text="Funar pre 2018"></Button>
                </div>
            </div>
        </div>
    </div>
</body>