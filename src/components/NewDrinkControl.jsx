import React from 'react';
import EmployeeConfirmation from './EmployeeConfirmation';
import AddDrink from './AddDrink';
import PropTypes from 'prop-types';

class NewDrinkControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
    this.handleEmployeeConfirmation = this.handleEmployeeConfirmation.bind(this);
  }

  handleEmployeeConfirmation(){
    this.setState({formVisibleOnPage: true});
  }

  render(){
    let currentlyVisibleContent = null;
    if (this.state.formVisibleOnPage){
      currentlyVisibleContent = <AddDrink onNewDrink={this.props.onNewDrink}/>;
    } else {
      currentlyVisibleContent = <EmployeeConfirmation onEmployeeConfirmation={this.handleEmployeeConfirmation}/>;
    }
    return (
      <div>
        {currentlyVisibleContent}
      </div>
    );
  }
}

NewDrinkControl.propTypes = {
  onNewDrink: PropTypes.func
};

export default NewDrinkControl;
