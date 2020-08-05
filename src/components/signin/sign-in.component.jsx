import React from 'react';

import './sign-in.styles.scss';

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

import {signInWithGoogle} from '../../firebase/firebase.utils';

export default class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        }

    }

    handleSubmit = event =>{
        event.preventDefault();
        this.setState({email:'',password:''})
    }

    handleChange= event =>{
        const {value,name} = event.target;
        this.setState({[name]:value})
    }
render(){
    return(
        <div className='signin'>
            <h2>I already have an account</h2> 
            <span>Sign in with your email and password</span> 

            <form onSubmit={this.handleSubmit}>
                <FormInput type="email" label="email" handleChange={this.handleChange} name="email" value={this.state.email} required/>
                <FormInput label="password" handleChange={this.handleChange} name="password" type="password" value={this.state.password} required />
                <CustomButton type='submit' value='Submit Form'>Sign In </CustomButton>
                <CustomButton onClick={signInWithGoogle}>
                    {' '}Sign in with Google{' '}
                </CustomButton>

            </form>  

        </div>
    )
}

}