import React from 'react';
import Header from '../HeaderComponent';
import { shallow } from 'enzyme';


describe('HeaderComponent', () => {
  
    const props = {
        id: null,
        username: "",
        first_name: "",
        last_name: "",
        last_login: null,
        date_joined: null,
        fetched: false,
        image: null
      };
    

      describe('Header container initial', () => {
        const headerContainer = (<Header {...props} />)

        it('renders properly', () => {
            expect(headerContainer).toMatchSnapshot()
          })    

        const component = shallow(<Header {...props} />)
        
          it('firstly no user data', ()=> {
            expect(component.state().id).toEqual(null);
            expect(component.state().first_name).toEqual("");
            expect(component.state().last_name).toEqual("");
            expect(component.state().last_login).toEqual(null);
            expect(component.state().date_joined).toEqual(null);
            expect(component.state().image).toEqual(null);
        })
     })

     

})