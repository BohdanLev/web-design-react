import React from 'react'; 
import ImageUploader from '../ImageUploader';
import { shallow } from 'enzyme';


describe('ImageUploaderComponent', () => {
    
      describe('ImageUploader container initial', () => {
        const ImageUploaderContainer = (<ImageUploader/>)

        it('renders properly', () => {
            expect(ImageUploaderContainer).toMatchSnapshot()
          })    
        
          const component = shallow(<ImageUploader />)
          it('ImgUrl default value ', () => {
            expect(component.state().image).toEqual(null)
          })
          
          

     })

     

})