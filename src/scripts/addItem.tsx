declare global {
    interface Window {
      require: any;
    }
}

const React = require('react');
const ReactDOM = require('react-dom');
require('../App.css');
const {ipcRenderer} = window.require('electron');

export function addItem(item: string) {
    ipcRenderer.send('item:add', item);
}

export interface IProps {
    quantity: number,
    item: string,
    priceUnit: number,
    priceTotal: number
}

const ItemElement : React.FC<IProps> = (props) => {
    const { quantity, item, priceUnit, priceTotal } = props;
    return (
        <tr>
            <td className='num'>{quantity}</td>
            <td className='item'>{item}</td>
            <td className='num'>{priceUnit}</td>
            <td className='num'>{priceTotal}</td>
        </tr>
    );
}

ipcRenderer.on('item:add', (e: any, quantity: number, item: string, priceUnit: number) => {
    //ReactDOM.render(
    //   <ItemElement quantity={quantity} item={item} priceUnit={priceUnit} priceTotal={quantity * priceUnit}/>,
    //    document.getElementById("#currentOrder")
    //);
})