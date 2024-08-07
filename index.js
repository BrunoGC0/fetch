document.getElementById("shuffle-btn").addEventListener("click", () => {
    tirarUmaCartaAleatoriaDoBaralho()
})

async function criarBaralhoEmbaralhado(){
    const url = "https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1";
    const resposta = await fetch(url)
    return await resposta.json()
}

async function trirarUmaCarta(deck_id){
    const url = `https://www.deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`;
    const resposta = await fetch(url)
    return await resposta.json()
}

async function tirarUmaCartaAleatoriaDoBaralho(){
    const baralho = await criarBaralhoEmbaralhado()
    const carta = await trirarUmaCarta(baralho.deck_id)
    const imagemCarta = carta.cards[0].image
    document.getElementById("carta").src = imagemCarta
}

tirarUmaCartaAleatoriaDoBaralho()
