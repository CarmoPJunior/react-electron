import React, {Component} from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';
//import './styles.css';


export default class Product extends Component{

    state = {
        products: [],
        productInfo: {},
        page: 1,
    }

    componentDidMount(){
        this.loadProducts();
    }

    loadProducts = async (page = 1) =>{

        const response = await api.get(`/devs?page=${page}`);
        const {users, ...productInfo} = response.data;

        this.setState({products : users, productInfo, page});        
    }

    
    prevPage = () =>{
        const {page} = this.state;

        if(page === 1) return

        const pageNumber = page - 1;
        this.loadProducts(pageNumber);

    }   

    nextPage = () =>{
        const {page, productInfo} = this.state;

        if(page === productInfo.pages) return

        const pageNumber = page + 1;

        this.loadProducts(pageNumber);

    }

    render(){

        const {products, page} = this.state;

        return (
            <div className="product-list"> 

                <h1>Hello Again, Total de Produtos: {this.state.products.length}</h1>
                
                <hr />
                {products.map(product => (
                    <article key={product.id}>
                        <strong>{product.name}</strong>
                        <p>{product.email}</p>
                        <Link to={`/products/${product.id}`}>Acessar</Link>
                        <Link to={`/tasks/`}>Tarefas</Link>
                    </article>
                ))}

                <div className="actions">
                    <button onClick={this.prevPage} disabled={page ===1}>Anterior</button>
                    <button onClick={this.nextPage} disabled={page === this.state.productInfo.pages}>Próximo</button>
                </div>
            
            </div>
        )
        
        
    }
}