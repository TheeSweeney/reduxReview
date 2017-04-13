import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';


class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li key={book.title} className="list-group-item">{book.title}</li>
      )
    })
  }

  render() {
    return (
      <ul className='list-group col-sm-4'>
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state){
  return {
    books: state.books
  }
}


//anything returned from this func will end up as props on the 
//BookList container
function mapDispatchToProps(dispatch) {
  //whenever selectbook is called, the result should be passed
  //to all the reducers
  return bindActionCreators({ selectBook: selectBook}, dispatch)
}

//Promote BookList form component to container
//must know about new dispatch method, selectBook. 
//Make it available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList)