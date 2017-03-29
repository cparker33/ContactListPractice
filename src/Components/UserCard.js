import React from 'react'
import users from '../JSONs/randomUsers.json';

const styleCard = {

  topCont: {

    width: 500,
    height: 250,
    backgroundColor: '#5ABB76',
    paddingTop: 25

  }

}

export default React.createClass({

  getInitialState() {

    return {
     user: users[this.props.match.params.id - 1]
    }

  },

  handBack() {

    this.props.history.goBack()

  },

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
          style={styleCard.topCont}>

          <div
            className='cCardImgCont'>

            <img
              alt='' 
              src={this.state.user.picture.large} />

          </div>

        </div>

        <ul
          id="cCardDataUl">
          <li
            className='cardText'>
            <span>
              <i className="fa fa-user" aria-hidden="true"></i>
            </span>
            <span> {this.capFirst(this.state.user.name.first)} {this.capFirst(this.state.user.name.last)}</span>
          </li>

          <li
            className='cardText'>
            <span><i className="fa fa-envelope" aria-hidden="true"></i></span>
            <span> {this.state.user.email} </span>
          </li>

           <li
            className='cardText'>
            <span><i className="fa fa-mobile" aria-hidden="true"></i></span>
            <span> {this.state.user.phone}</span>
          </li>

           <li
            className='cardText'>
            <span><i className="fa fa-globe" aria-hidden="true"></i></span>
            <span> {this.state.user.location.city} {this.state.user.location.state}</span>
          </li>

        </ul>

        <div
          id='cBack'
          onClick={this.handBack}
        >
          <i className="fa fa-arrow-left" aria-hidden="true"></i>
        </div>

        
           
      </div>



    )
  }


})
