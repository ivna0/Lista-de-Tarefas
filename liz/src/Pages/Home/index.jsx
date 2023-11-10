import { useRef, useState } from 'react'
import { v4 } from 'uuid'
import * as S from './styles'


function Home() {
  const [ produtos, setProdutos] = useState([])
  const inputRef = useRef()

  function cliqueiNoBotao(){
    console.log(v4())
    setProdutos([{ id: v4(), nome: inputRef.current.value}, ...produtos])
    inputRef.current.value = ""
  }

  function deletarProduto(id){
    setProdutos(produtos.filter( produto => produto.id !== id ))
  }

  return (
    <S.Container>
      <S.Product>
        <h1>Lista de Tarefas</h1>
        <div>
        <input placeholder="produto.." ref={inputRef}/>
        <S.AddButton onClick={cliqueiNoBotao}>Adicionar</S.AddButton>
        {produtos.map((produto) => (
        <S.ContentProduct key={produto.id} >
            <p>{produto.nome}</p>
            <S.TrashButton onClick={() => deletarProduto(produto.id)}>🗑️</S.TrashButton>
        </S.ContentProduct>
          ))}
        </div>

     
     </S.Product>
     </S.Container>
     
  )
}

export default Home



