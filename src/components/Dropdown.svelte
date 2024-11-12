<script>
    let shown = false;

    function handleClick() {
        shown=true;
    }
</script>

<button id="GamesDropdown" on:click={handleClick}>Games</button>
{#if shown}
    <a href="/projects/monster">Monster Game</a>
    <a href="/projects/mazecraft">Mazecraft</a>
    <a href="/projects/rps">Rock Paper Scissors</a>
{/if}

<style>
    #GamesDropdown {
        border-radius: 50px;
        font-size: 30px;
        background-image: linear-gradient(yellow,white 60%);
    }
</style>