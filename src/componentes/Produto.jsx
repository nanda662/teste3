import react from "react";

import { useState } from "react";

const Produto = () => {

    const [imagem, setImagem] = useState(null);
    const [nome, setNome] = useState("");
    const [categoria, setCategoria] = useState("");
    const [tamanho, setTamanho] = useState("");
    const [preco, setPreco] = useState("");
    const [quantidade, setQuantidade] = useState("");
    const [descricao, setDescricao] = useState("");

    const [produtos, setProdutos] = useState([]);

    const selecionarImagem = (event) => {
        const arquivo = event.target.files[0];

        if (arquivo) {
            setImagem(URL.createObjectURL(arquivo));
        }
    };

    const adicionarProduto = (event) => {
        event.preventDefault();

        const novoProduto = {
            id: Date.now(),
            nome: nome,
            categoria: categoria,
            tamanho: tamanho,
            preco: preco,
            quantidade: quantidade,
            descricao: descricao,
            imagem: imagem
        };

        setProdutos([...produtos, novoProduto]);
        console.log(novoProduto);
    };

    return (
        <div className="p-6">

            <h1 className="text-2xl font-bold mb-6">
                Adicionar Produto
            </h1>

        <form
        onSubmit={adicionarProduto}
            className="bg-white p-6 rounded-lg shadow-md max-w-3xl">

                {/* img jpg */}
                <div className="mb-6">

                    <label className="block font-semibold mb-2">
                        Foto do produto
                    </label>

                    <input
                        type="file"
                        accept="image/*"
                        onChange={selecionarImagem}
                    />

                    {imagem && (
                        <img
                            src={imagem}
                            alt="Prévia do produto"
                            className="mt-4 w-48 h-48 object-cover rounded-lg"
                        />
                    )}

                </div>

                {/* nome */}
                <div className="mb-4">

                    <label className="block font-semibold mb-2">
                        Nome do produto
                    </label>

                    <input
                        type="text"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        placeholder="Ex: Camiseta preta vintage"
                        className="w-full border p-2 rounded-lg"
                    />

                </div>

                {/* tipo */}
                <div className="mb-4">

                    <label className="block font-semibold mb-2">
                        Categoria
                    </label>

                    <select
                        value={categoria}
                        onChange={(e) => setCategoria(e.target.value)}
                        className="w-full border p-2 rounded-lg"
                    >
                        <option value="">Selecione uma categoria</option>
                        <option value="camiseta">Camiseta</option>
                        <option value="calca">Calça</option>
                        <option value="vestido">Vestido</option>
                        <option value="saia">Saia</option>
                        <option value="blusa">Blusa</option>
                        <option value="casaco">Casaco</option>
                        <option value="acessorio">Acessório</option>
                    </select>

                </div>

                {/* ed */}
                <div className="mb-4">

                    <label className="block font-semibold mb-2">
                        Tamanho
                    </label>

                    <select
                        value={tamanho}
                        onChange={(e) => setTamanho(e.target.value)}
                        className="w-full border p-2 rounded-lg"
                    >
                        <option value="">Selecione o tamanho</option>
                        <option value="PP">PP</option>
                        <option value="P">P</option>
                        <option value="M">M</option>
                        <option value="G">G</option>
                        <option value="GG">GG</option>
                        <option value="unico">Tamanho único</option>
                    </select>

                </div>

                {/* preco */}
                <div className="mb-4">

                    <label className="block font-semibold mb-2">
                        Preço
                    </label>

                    <input
                        type="number"
                        value={preco}
                        onChange={(e) => setPreco(e.target.value)}
                        placeholder="Ex: 49.90"
                        step="0.01"
                        className="w-full border p-2 rounded-lg"
                    />

                </div>

                {/* quantidae */}
                <div className="mb-4">

                    <label className="block font-semibold mb-2">
                        Quantidade em estoque
                    </label>

                    <input
                        type="number"
                        value={quantidade}
                        onChange={(e) => setQuantidade(e.target.value)}
                        placeholder="Ex: 2"
                        min="0"
                        className="w-full border p-2 rounded-lg"
                    />

                </div>

                {/* legendasla */}
                <div className="mb-6">

                    <label className="block font-semibold mb-2">
                        Descrição
                    </label>

                    <textarea
                        value={descricao}
                        onChange={(e) => setDescricao(e.target.value)}
                        placeholder="Descreva o produto..."
                        rows="4"
                        className="w-full border p-2 rounded-lg"
                    />

                </div>

                {/* botao slc quero mimi */}
                <button
                    type="submit"
                    className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-700"
                >
                    Adicionar Produto
                </button>

            </form>

            <div className="mt-8">
                <h2 className="text-xl font-bold mb-4">
                    Produtos cadastrados
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                 {produtos.map((produto) => (
                    <div
                        key={produto.id}
                        className="bg-white rounded-lg shadow-md overflow-hidden"
                    >

                        {produto.imagem && (
                            <img
                                src={produto.imagem}
                                alt={produto.nome}
                                className="w-full h-64 object-cover"
                            />
                     )}

                    <div className="p-4">

                       <h3 className="text-lg font-bold">
                        {produto.nome}
                       </h3>

                       <p className="text-gray-600">
                        Categoria: {produto.categoria}
                       </p>

                       <p className="text-gray-600">
                        Tamanho: {produto.tamanho}
                       </p>

                       <p className="font-bold mt-2">
                        R$ {produto.preco}
                       </p>

                       <p className="text-gray-600">
                        Estoque: {produto.quantidade}
                       </p>

                       <p className="text-gray-600 mt-2">
                        {produto.descricao}
                       </p>

                    </div>
                </div>
            ))}

        </div>
    </div>

</div>
);
};


export default Produto;