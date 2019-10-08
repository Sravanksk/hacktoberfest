import * as styles from './styles.scss';

import { ImageOnScrollProps, ImageOnScrollState, ImageOnScrollMethods } from './defines';


export default (render: Function, data: ImageOnScrollProps & ImageOnScrollState & ImageOnScrollMethods , createStyle: Function) => {
    return render`
        ${createStyle(styles)}
        <div>Fill me with something cool</div>
    `;
}
