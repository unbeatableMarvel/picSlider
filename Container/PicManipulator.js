import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {ClickTOChangePic} from '../Actions/EventManager';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';

class PicManager extends Component {


	renderPic()
	{

		console.log("complete obj",this.props);
		
				return (
				<div key={this.props.pic[this.props.newPicObj].id} style={{textAlign:'center'}}>
                
				<div>
				<Paper zDepth={1}>
				<img src={this.props.pic[this.props.newPicObj].Url}/>
				</Paper>
				</div>  
				<h2>{this.props.pic[this.props.newPicObj].name}</h2> 
				  
				<RaisedButton label="Change Pic" secondary={true} style={{marginTop:'20px'}} onClick={() => this.props.ClickTOChangePic(this.props.newPicObj+1)} />
				  
				</div>
				);

		

	}
	render()
	{

		return(
			<div>
			<MuiThemeProvider>
			{this.renderPic()}
			</MuiThemeProvider>
			</div>

		);
	}

}



function mapStateToProps(state) {
	console.log("ooooo*******",state);
    return {
        pic: state.picObject,
        newPicObj:state.clickPicManager
    };
}


function matchDispatchToProps(dispatch){
    return bindActionCreators({ClickTOChangePic: ClickTOChangePic}, dispatch);
}


export default connect(mapStateToProps,matchDispatchToProps)(PicManager);