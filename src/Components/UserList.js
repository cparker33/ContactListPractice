import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/UserItem.css';
import users from '../JSONs/randomUsers.json';

const styleList = {

  titleCont: {

    backgroundColor: '#5ABB76',
    width: 500,
    height: 60,
    
  },

  titleText: {

    textAlign: 'center',
    height: 60,
    color: '#FFF',
    paddingTop: 10
  },

  liStyle: {

    width: 500,
    height: 60

  },


  nameStyle: {

    marginTop: 20,
    marginLeft: 10,
  },




}

export default React.createClass({


  capFirst(c) {

    var a = c.split('')

    a[0] = a[0].toUpperCase()

    a.join('')

    return a
  },

  render() {

    return (
  
        <div>

          <div
            style={styleList.titleCont}>

            <h1
              style={styleList.titleText}>
                My Peeps
            </h1>

          </div>

          <ui>

          {
            users.map((user) => {

              return (

                <Link 
                  key={'user' + user.id} 
                  to={'/card/' + user.id}
                >

                  <li
                    style={styleList.liStyle}
                  >
                    
                    <div
                      id='cLiCont'
                    >

                        <div
                          className='imgCont'
                        >
                            <img 
                              alt={user.name.first} 
                              src={user.picture.thumbnail} 
                            />

                        </div>


                        <div
                         style={styleList.nameStyle}
                        >

                        {this.capFirst(user.name.first)} {this.capFirst(user.name.last)}

                        </div>

                    </div>

                    

                  </li>

                </Link>


              )

            })

          }
        
          </ui>

        </div>

    )
  }


})