import React from 'react';
import AddOptions from './AddOptions';
import Options from './/Options';
import Action from './Action';
import Header from './Header';
import OptionModal from './OptionModal';

class IndecisionApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined,
  };

  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }));
  };

  handleClearSelectedOptions = () => {
    this.setState(() => ({ selectedOption: undefined }));
  };

  handleDeleteOption = optionToRemove => {
    this.setState(prevState => ({
      options: prevState.options.filter(option => {
        return optionToRemove !== option;
      }),
    }));
  };

  handlePick = () => {
    const random = Math.floor(Math.random() * this.state.options.length);
    const options = this.state.options[random];
    this.setState(() => ({ selectedOption: options }));
    console.log(random);
  };

  handleAddOptions = option => {
    if (!option) {
      return 'Enter valid value to add item';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists';
    }

    this.setState(prevState => ({ options: prevState.options.concat(option) }));
  };

  componentDidMount() {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);
      if (options) {
        this.setState(() => ({ options: options }));
      }
    } catch (error) {}
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
      console.log('Saving Data');
    }
  }

  componentWillUnmount() {
    console.log('component will unmount');
  }

  //   handleDeleteOptions () {
  //       this.setState(() => {
  //           return {
  //               options:[]
  //           }
  //       })
  //   }

  render() {
    const title = 'Add and Delete List';
    const subtitle = 'Add and Remove Item From the List';

    return (
      <div>
        <div className='container'>
          <Header subtitle={subtitle} />
          <Action
            hasOptions={this.state.options.length > 0}
            handlePick={this.handlePick}
          />
          <div className='widget'>
            <Options
              options={this.state.options}
              handleDeleteOptions={this.handleDeleteOptions}
              handleDeleteOption={this.handleDeleteOption}
            />
            <AddOptions handleAddOption={this.handleAddOptions} />
          </div>
        </div>

        <OptionModal
          selectedOption={this.state.selectedOption}
          handleClearSelectedOptions={this.handleClearSelectedOptions}
        />
      </div>
    );
  }
}

IndecisionApp.defaultProps = {
  options: [],
};

export default IndecisionApp;
