import React, {Component} from 'react';
import api from '../../services/api';
//import './styles.css'

export default class InfoProduct extends Component{

    state ={
        user: {},
    };

    async componentDidMount(){

        const { id } = this.props.match.params;
        const response = await api.get(`/dev?id=${id}`);
        
        this.setState({ user: response.data });
    }



    render(){
        
        const { user } = this.state;
        
        return (
            <div className="product-info">
                <h1>{user.name}</h1>
                <p>{user.email}</p>

                <p>
                    URL: <a href={user.name}>{user.name}</a>
                </p>
                    
                <a href="/" className="btn-voltar">Voltar</a>        

            </div>
        )
    }
}