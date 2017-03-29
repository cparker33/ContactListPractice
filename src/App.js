import React from 'react'
import UserList from './Components/UserList.js';
import UserCard from './Components/UserCard.js';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import './Styles/normalize.css'
import './Styles/App.css'


const styleApp = {

  mainWrap: {

    width: 500,
    height: 700

  }

}

export default React.createClass({

  render() {

    return (

      <Router>
      
        <div
          style={styleApp.mainWrap}>
        
        <Route exact={true} path='/' component={UserList} />
        <Route path='/card/:id' component={UserCard} />

        </div>

       </Router> 



    )
  }


})