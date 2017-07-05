import React , { Component } from 'react'

class Email extends Component{

	constructor(props){
		super(props);
		this.state={
			term:''
		}
	}
	 showResult(){
	 	return(
	 		<div>
	 			По нашим расчётам вы вполне можете сэкономить до ...Р
	 		</div>
	 		)
	 }
	render(){
		return(
			<div>
			{this.showResult()}
				<form id="subscribe" className="form" method="post" action="mailto:awesomebon@gmail.com" name="subscribtion_form">
			        <input id="email" className="email" type="text" name="email" placeholder="mail@gmail.com"/>

			        <input type="hidden" name="charset" value="utf-8"/>
			        <input type="hidden" name="default_list_id" value="4525134"/>
			        <input type="hidden" name="overwrite" value="2"/>
			        <input type="hidden" name="double_optin" value="3"/>

	        	<button className="submit" >Получить результат!</button>
      			</form>

      	</div>
		)
	}
}
export default Email;