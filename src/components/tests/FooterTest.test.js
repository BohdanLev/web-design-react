import React from 'react'; 
import Footer from '../Footer';
import { shallow } from 'enzyme';


describe('FooterComponent', () => {

    
      describe('Footer container initial', () => {
        const FooterContainer = (<Footer/>)

        it('renders properly', () => {
            expect(FooterContainer).toMatchSnapshot()
          })    
        
          const component = shallow(<Footer/>)

          it('company name visible', () => {
            expect(component.find('#company_name').text()).toEqual('©Wanderlance 2020')
          })
          
          

     })

     

})