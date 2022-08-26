import _ from 'lodash'
import './assets/styles/style.css';
import { functionOne } from './myName';

functionOne(); // this should work as expected!
function component() {
    const element = document.createElement('div')

    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ')
    element.classList.add('hello');
    return element
}

document.body.appendChild(component())