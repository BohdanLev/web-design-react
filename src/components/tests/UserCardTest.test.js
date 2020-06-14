import React from 'react'; 
import UserCard from '../user-card';
import { shallow } from 'enzyme';


describe('UserCardComponent', () => {
    

      describe('UserCard container initial', () => {
        const UserCardContainer = (<UserCard/>)

        it('renders properly', () => {
            expect(UserCardContainer).toMatchSnapshot()
          })    
        
          const component = shallow(<UserCard/>)

        it('should render avatar', ()=>{
            expect(component.find('#user-avatar')).toBeDefined()
        })

        it('should render owner link and info', ()=>{
            expect(component.find('#link-to-owner')).toBeDefined()
        })
        
     })

     

})