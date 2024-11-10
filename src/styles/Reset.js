import { createGlobalStyle } from "styled-components";


const Reset =  createGlobalStyle `
	*{
		margin: 0;
		padding: 0;
		border: 0;
		box-sizing: border-box;
		overflow: hidden;
		font-family: Roboto, Helvetica, Arial, sans-serif;
        font-size: 16px;
        line-height: 24px;
        letter-spacing: 0.5px;
        font-weight: 400;
        font-style: normal;
	}
	input:focus,
	textarea:focus
	{ 
		outline: none;
		box-shadow: none;
	}
	ol, ul, a
	{
		list-style: none;
		text-decoration: none;
	}
	table 
	{
		border-collapse: collapse;
		border-spacing: 0;
	}
	.invalid-feedback, .input-group .invalid-feedback, .input-group .valid-feedback 
	{
		/* Formatando controle de msg de erro dos campos */
		position: static;
		margin-top: 0;
	}
	.was-validated .form-control:invalid, .form-control.is-invalid 
	{
		/* Formatando controle de msg de erro dos campos */
		margin-bottom: .2rem;
	}



`
export default Reset;


