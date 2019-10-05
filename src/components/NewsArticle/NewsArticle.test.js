import React from 'react';
import { shallow } from 'enzyme';
import NewsArticle from './NewsArticle';

describe('NewsArticle', () => {
  it('should match the snapshot with all data pass in correctly', () => {
    const wrapper = shallow(
      <NewsArticle key={1}
        img='https://theknow.denverpost.com/wp-content/uploads/2016/03/CDXXTHEWHODSC_4082x.jpg'
        headline='The Who postpones Denver Concert at the Pepsi Center'
        description='Classic-rock band The Who has postponed its Denver concert, set for Sunday, Sept. 29, after an illness robbed singer Roger Daltrey of his voice, the band said on Twitter.'
        url='https://theknow.denverpost.com/2019/09/27/the-who-postpones-denver-concert/225182/'
      />
    )
    expect(wrapper).toMatchSnapshot();
  })

  // it('should link to another page when link is clicked', () => {
  //   const wrapper = shallow(
  //     <NewsArticle key={1}
  //       img='https://theknow.denverpost.com/wp-content/uploads/2016/03/CDXXTHEWHODSC_4082x.jpg'
  //       headline='The Who postpones Denver Concert at the Pepsi Center'
  //       description='Classic-rock band The Who has postponed its Denver concert, set for Sunday, Sept. 29, after an illness robbed singer Roger Daltrey of his voice, the band said on Twitter.'
  //       url='https://theknow.denverpost.com/2019/09/27/the-who-postpones-denver-concert/225182/'
  //     />
  //   )
  //
  //   wrapper.find('a').simulate('click')
  //
  //   expect(wrapper).toHaveBeenCalledWith('https://theknow.denverpost.com/2019/09/27/the-who-postpones-denver-concert/225182/')
  // })

})
