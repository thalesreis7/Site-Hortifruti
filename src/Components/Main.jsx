import React from 'react'
import * as S from "./Styled";
import alface from "../assets/alface.jpg";
import carrinho from "../assets/carrinho.png";
import laranja from "../assets/laranja.jpg";
import beterraba from "../assets/beterraba.jpg";
import cenoura from "../assets/cenoura.jpg";
import cereja from "../assets/cereja.jpg";
import limao from "../assets/limao.jpg";
import manga from "../assets/manga.jpg";
import tomate from "../assets/tomate.jpg";
import { useState } from "react";

export default function Main() {

    const [item, setItem] = useState(carrinho)
    const [frase, setFrase] = useState("Clique no produto para colocar no carrinho")
    const [numero, setNumero] = useState(null)
  
    const sub = () =>{
      if(numero > 0){
        setNumero(numero - 1)
      }
    }
    
  
  
    return (
      <S.Main>
        <S.BoxOne>
          <S.AncoraH2>
            <S.H1>HORTIFRUTI</S.H1><span>VnW</span>
          </S.AncoraH2>  
            <h2>Nossos Produtos</h2>
        </S.BoxOne>
        <S.BoxTwo>
          <S.BoxItem>
            <img onClick={()=>{setItem(alface),setFrase("R$: 3,00")}} src={alface} alt="imagem de uma alface" />
            <img onClick={()=>{setItem(laranja),setFrase("R$: 5,00")}} src={laranja} alt="imagem de uma laranja" />
            <img onClick={()=>{setItem(cereja),setFrase("R$: 10,00")}} src={cereja} alt="imagem de uma cereja" />
            <img onClick={()=>{setItem(cenoura),setFrase("R$: 3,00")}} src={cenoura} alt="imagem de uma cenoura" />
            <img onClick={()=>{setItem(manga),setFrase("R$: 6,00")}} src={manga} alt="imagem de uma manga" />
            <img onClick={()=>{setItem(limao),setFrase("R$: 2,00")}} src={limao} alt="imagem de um limão" />
            <img onClick={()=>{setItem(beterraba),setFrase("R$: 4,00")}} src={beterraba} alt="imagem de uma beterraba" />
            <img onClick={()=>{setItem(tomate),setFrase("R$: 7,00")}} src={tomate} alt="imagem de um tomate" />
          </S.BoxItem>
          <S.Ancora>
            <S.Carrinho>
              <S.SecondCarrinho>
                <img src={item} alt="carrinho de compras" />
                <h3>{frase}</h3>
                <h4>{numero}</h4>
              </S.SecondCarrinho>
              <S.MaisMenos>
                <button onClick={()=>{setNumero(numero + 1)}}>+</button>
                <button onClick={sub}>-</button>
              </S.MaisMenos>
            </S.Carrinho>
          </S.Ancora>
        </S.BoxTwo>
      </S.Main>
    );
  }
