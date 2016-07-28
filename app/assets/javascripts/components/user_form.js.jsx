var UserForm = React.createClass({
  getInitialState: function(){
  	return{
      name: '',
      age: '',
      salary: ''
  	};
  },

  handleChange: function(e) {
    var name = e.target.name;
    var obj = {};
    obj[name] = e.target.value;
    this.setState(obj);
  },

  valid: function(){
    return (this.state.name && this.state.age && this.state.salary);
  },

  handleSubmit: function(e){
    e.preventDefault();
    $.post('',
           { user: this.state },
           function(data) {
             //this.props.handleNewRecord(data);
             this.setState(this.getInitialState());
           }.bind(this),
           'JSON'
    );
  },

  render: function(){
  	return(
  	  <form className='form-inline' onSubmit={this.handleSubmit}>
        <div className='form-group'>
          <input type='text' className='form-control'
                 placeholder='Name' name='name'
                 value={this.state.name} onChange={this.handleChange}>
          </input>
        </div>
        <div className='form-group'>
          <input type='number' className='form-control'
                 placeholder='age' name='age'
                 value={this.state.age} onChange={this.handleChange}>
          </input>
        </div>
        <div className='form-group'>
          <input type='number' className='form-control'
                 placeholder='salary' name='salary'
                 value={this.state.salary} onChange={this.handleChange}>
          </input>
        </div>
        <div className='form-group'>
          <input type='submit' className='btn btn-primary'
                 disabled={!this.valid()}>
          </input>
        </div>
      </form>
  	);
  }
});