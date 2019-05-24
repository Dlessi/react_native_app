import HomeContainer from '../containers/HomeContainer'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import ShowsPageContainer from '../containers/ShowsPageContainer'

const MainNavigation = createStackNavigator({
  Home: { screen: HomeContainer },
  ShowsPage: { screen: ShowsPageContainer },
})

const Navigation = createAppContainer(MainNavigation)

export default Navigation
