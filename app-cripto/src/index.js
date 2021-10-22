import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Bitcoin from './Bitcoin';



//IMPORTAR COMPONENTES
import Principal from './Principal';
import Topo from './Topo';

import './Estilos.css';

ReactDOM.render(
<div>
  <Topo />
  <BrowserRouter>
    <Switch>
      <Route path='/' exact={true} component={Principal} />
      <Route path='/bitcoin' exact={true} component={Bitcoin} />
    </Switch>
  </BrowserRouter>
</div>
,document.getElementById('root'));