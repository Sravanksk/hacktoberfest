import Component from '@biotope/element';
import template from './template';
import {watchViewport} from 'tornis';

import { ImageOnScrollProps, ImageOnScrollState, ImageOnScrollMethods } from './defines';



class ImageOnScroll extends Component< ImageOnScrollProps, ImageOnScrollState > {

    constructor() {
        super();
        setTimeout(() => watchViewport(this.updateValues), 100);

        this.updateValues = this.updateValues.bind(this);
    }

    public connectedCallback() {
       this.accordion = this.shadowRoot.querySelector("#accordion");
    }



    static componentName = 'image-on-scroll';

    private headerHeight = 0;
    private closedHeight = 400;
    private openHeight = 1400;
    private closedWidth = 400;
    private openWidth = 800;

    private scrollDelay = 200;

    private stretchHeight = this.openHeight-this.closedHeight;
    private stretchWidth = this.openWidth-this.closedWidth;
    private accordion;


    private mouseX = 0;
    private mouseY = 0;
    private sizeX = 0;
    private sizeY = 0;
    private docSizeY = 0;
    public scrollTop = 0;
    private scrollBottom = 0;

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

    viewportScroll() {
        this.style.height = (this.headerHeight + 2*this.openHeight - this.closedHeight) + "px";
        let currentWidth = this.openWidth;
        this.accordion.style.position = "absolute";
        this.accordion.style.top = '0';
        this.accordion.style.left = (this.sizeX - this.openWidth)/2 + "px";
        this.accordion.style.width = this.openWidth + "px";
        this.accordion.style.height = this.openHeight + "px";
        if(this.scrollTop<this.headerHeight){
            console.log("phase1");
            this.accordion.style.position = "absolute";
            this.accordion.style.top = this.headerHeight + "px";
            this.accordion.style.left = (this.sizeX - this.closedWidth)/2 + "px";
            this.accordion.style.width = this.closedWidth + "px";
            this.accordion.style.height = this.closedHeight + "px";
        }else if(this.scrollTop<this.headerHeight+this.stretchWidth){
            console.log("phase2");
            currentWidth = this.closedWidth + (this.scrollTop-this.headerHeight);
            this.accordion.style.position = "fixed";
            this.accordion.style.top = '0';
            this.accordion.style.left = (this.sizeX - currentWidth)/2 + "px";
            this.accordion.style.width = currentWidth + "px";
            this.accordion.style.height = this.closedHeight + "px";
        }else if(this.scrollTop<(this.headerHeight+this.stretchWidth+this.openHeight-this.closedHeight)){
            console.log("phase3");
            currentWidth = this.openWidth;
            this.accordion.style.position = "fixed";
            this.accordion.style.top = '0';
            this.accordion.style.left = (this.sizeX - currentWidth)/2 + "px";
            this.accordion.style.width = currentWidth + "px";
            this.accordion.style.height = (this.closedHeight + (this.scrollTop-(this.headerHeight+this.stretchWidth))) + "px";
        }else{
            console.log("phase4");
            currentWidth = this.openWidth;
            this.accordion.style.position = "absolute";
            this.accordion.style.top = (this.headerHeight+this.stretchWidth+this.stretchHeight) + "px";
            this.accordion.style.left = (this.sizeX - currentWidth)/2 + "px";
            this.accordion.style.width = this.openWidth + "px";
            this.accordion.style.height = this.openHeight + "px";
        }
        let productList = document.getElementById("productList");
    }

    updateValues({ size, scroll, mouse, orientation }) {

        if (size.changed) {
            // console.log("size");
            // console.log(size);
            this.sizeX = size.x;
            this.sizeY = size.y;
            // docSizeY = size.docY;
            this.viewportScroll();
        }

        if (scroll.changed) {
            console.log("scroll");
            console.log(scroll);
            this.scrollTop = scroll.top;
            this.scrollBottom = scroll.bottom;
            this.viewportScroll();
        }

        if (mouse.changed) {
            // console.log("mouse");
            // console.log(mouse);
            // mouseX = mouse.x;
            // mouseY = mouse.y;
        }
        };

    render() {
        return template(this.html, { ...this.props, ...this.state, ...this.methods }, this.createStyle);
    }
}

export default ImageOnScroll;
