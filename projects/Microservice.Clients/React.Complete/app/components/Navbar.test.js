import React from 'react'
import sinon from 'sinon';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';
import Navbar from './Navbar';

describe('<Navbar />', () => {

    it("should have a container element", () => {
        // shallow is used when trying to test your component as a unit
        // this is so we aren't accidentally asserting behavior of child components
        const component = shallow(Navbar(() => {}, 'Home'));

        // find takes on EnzymeSelector. You can think of them like
        // jquery selectors but extended to work with react components
        // https://github.com/airbnb/enzyme/blob/master/docs/api/selector.md
        expect(component.find('div.container-fluid')).to.have.length(1);
    });
    
    it("should have a header with content", () => {
        const component = shallow(Navbar(() => {}, 'Home'));
        const header = component.find('div.navbar-header');
        
        expect(header).to.have.length(1);

        // we can access the children of the component but I hope this also illustrates
        // why breaking having larger components is not a great idea. It starts making it harder
        // to unit test
        const brand = header.childAt(0);

        expect(brand).to.not.be.undefined;
        expect(brand.text()).to.be.equal('React Demo');
        
    });

    it("should only have one active nav-bar item", () => {
        const component = shallow(Navbar(() => {}, 'Home'));
        const activeItem = component.find('.active');

        expect(activeItem).to.have.length(1);
        expect(activeItem.text()).to.be.equal("Home");
    });

    it('should fire callback when nav clicked', () => {
        const onNavLinkClicked = sinon.spy();
        const component = shallow(Navbar(onNavLinkClicked, 'Home'));

        console.log(component.debug());
        component.find('li').not('.active').childAt(0).simulate('click');
        expect(onNavLinkClicked).to.have.property('callCount', 1);
    });

});