<script>
    import Header from "../components/Header.svelte";
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
        background: rgb(70,117,153);
        background: linear-gradient(145deg, rgba(70,117,153,1) 0%, rgba(158,216,219,1) 100%);
        border-radius: 20px;
        padding-left: 20px;
    }

    :global(h1) {
        font-family: "Poppins", sans-serif;
        font-size: 24px;
        color: #fff;
    }
</style>

<!-- markup (zero or more items) goes here -->

<body>
    <div class="card_container">
        <Header></Header>
    </div>
</body>