//IMPORTAR O MODULO react
import React from 'react'


//IMPORTAR IMAGENS
import bitcoin from './imagens/bitcoin.png';
import xrp from './imagens/xrp.png';
import litecoin from './imagens/litecoin.png';
import ethereum from './imagens/ethereum.png';
import chiliz from './imagens/chiliz.png';
import usdt from './imagens/usdt.png';


//IMPORTAR CSS
import './Principal.css';

//CLASSE
export default class Principal extends React.Component{

  //CONSTRUTOR
  constructor(props){
    super(props);
    
    this.state = {
      bitcoin : 0,
      litecoin : 0,
      xrp : 0,
      ethereum: 0,
      chiliz: 0,
      usd: 0
    }
  }
  //ANTES DE MONTAR O COMPONENTE
  componentDidMount(){
    // this.interval = setInterval(() => {
    fetch('https://www.mercadobitcoin.net/api/BTC/ticker/')
    .then(retorno => retorno.json())
    .then(retorno => this.setState({bitcoin:retorno.ticker.sell}))

    fetch('https://www.mercadobitcoin.net/api/LTC/ticker/')
    .then(retorno => retorno.json())
    .then(retorno => this.setState({litecoin:retorno.ticker.sell}))

    fetch('https://www.mercadobitcoin.net/api/XRP/ticker/')
    .then(retorno => retorno.json())
    .then(retorno => this.setState({xrp:retorno.ticker.sell}))

    fetch('https://www.mercadobitcoin.net/api/ETH/ticker/')
    .then(retorno => retorno.json())
    .then(retorno => this.setState({ethereum:retorno.ticker.sell}));

    fetch('https://www.mercadobitcoin.net/api/CHZ/ticker/')
    .then(retorno => retorno.json())
    .then(retorno => this.setState({chiliz:retorno.ticker.sell}));

    fetch('https://www.mercadobitcoin.net/api/USDC/ticker/')
    .then(retorno => retorno.json())
    .then(retorno => this.setState({usd:retorno.ticker.sell}));


  }

  //RENDER
  render(){
    return(
      <main className='container-fluid layout'>
        <div className='row'>
          <div className='col-4'>
            <div className='card'>
              <img src={bitcoin} />
              <p>R$ {Number(this.state.bitcoin).toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+\,)/g, "$1.")}</p>
            </div>
          </div>

          <div className='col-4'>
            <div className='card'>
              <img src={litecoin} />
              <p>R$ {Number(this.state.litecoin).toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+\,)/g, "$1.")}</p>
            </div>
        </div>

          <div className='col-4'>
            <div className='card'>
              <img src={xrp} />
                <p>R$ {Number(this.state.xrp).toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+\,)/g, "$1.")}</p>
                 </div>
            </div>
  

     
          <div className='col-4'>
            <div className='card'>
              <img src={ethereum} />
                <p>R$ {Number(this.state.ethereum).toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+\,)/g, "$1.")}</p>
                 </div>
            </div>
     

       
          <div className='col-4'>
            <div className='card'>
              <img src={chiliz} />
                <p>R$ {Number(this.state.chiliz).toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+\,)/g, "$1.")}</p>
                 </div>
            </div>
      

        
          <div className='col-4'>
            <div className='card'>
              <img src={usdt} />
                <p>R$ {Number(this.state.usd).toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+\,)/g, "$1.")}</p>
                 </div>
            </div>
        </div>


      

      </main>
    )
  }
}
