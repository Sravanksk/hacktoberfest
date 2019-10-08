import Component from '@biotope/element';
import template from './template';

import { ImageOnScrollProps, ImageOnScrollState, ImageOnScrollMethods } from './defines';



class ImageOnScroll extends Component< ImageOnScrollProps, ImageOnScrollState > {
    static componentName = 'image-on-scroll';

    static attributes = [

    ];

    public methods: ImageOnScrollMethods = {

    };
   
    get defaultState() {
        return {

        }
    }
  
    get defaultProps() {
        return {

        }
    }

    render() {
        return template(this.html, { ...this.props, ...this.state, ...this.methods }, this.createStyle);
    }
}

export default ImageOnScroll;
