import {createStackNavigator, createAppContainer} from 'react-navigation';
import Map from '../src/components/Map';
import PontosInfo from '../src/components/PontosInfo';
import Details from '../src/components/Details';
import Turismo from '../src/components/Turismo';
import RotasSug from '../src/components/RotasSug';
import PontosClick from '../src/components/PontosInfo/PontosClick';
import Cultura from '../src/components/RotasSug/RotasSugList/Cultura';
import Culinaria from '../src/components/RotasSug/RotasSugList/Culinaria';
import Historico from '../src/components/RotasSug/RotasSugList/Historico';


const StackNav = createStackNavigator({
    Main: Turismo,
    Map: Map,
    PontosPage: PontosInfo,
    DetailsPage: Details,
    CulturaPage: Cultura,
    CulinariaPage: Culinaria,
    HistoricoPage: Historico, 
    RotasSug: { screen: RotasSug},
    PontosClick: { screen: PontosClick}
},{
    defaultNavigationOptions:{
        headerTitleStyle:{
          color:'white'
        },
        headerStyle:{
          backgroundColor: '#6D3BD2',
        }
    },
  });

const App = createAppContainer(StackNav);

export default App;