import * as React from 'react';
import './App.css';
import {addItem} from './scripts/addItem';

const App: React.FC = () => {
  return (
    <section id="main" className="wrapper">
        <div className="inner">
            <div className="row">
                <div className="col-6 col-12-medium">
                    <ul className="actions fit">
                        <li>
                            <button onClick={() =>{addItem('Whole Chicken')}} className="button primary fit">Whole Chicken</button>
                        </li>
                        <li>
                            <button onClick={() =>{addItem('Half Chicken')}} className="button fit">Half Chicken</button>     
                        </li>
                        <li>
                            <button onClick={() =>{addItem('Quarter Chicken')}} className="button primary fit">Quarter Chicken</button>
                        </li>
                    </ul>
                    <ul className="actions fit">
                        <li>
                            <button onClick={() =>{addItem('Cold Chicken')}} className="button fit">Cold Chicken</button>
                        </li>
                        <li>
                            <button onClick={() =>{addItem('Half Chicken Chips')}} className="button primary fit">Half Chicken Chips</button>     
                        </li>
                        <li>
                            <button onClick={() =>{addItem('Quarter Chicken Chips')}} className="button fit">Quarter Chicken Chips</button>
                        </li>
                    </ul>
                </div>
                <div className="col-6 col-12-medium">
                    <div className="table-wrapper">
                        <table className="saleTable">
                            <thead>
                                <tr>
                                    <th className="num">Quantity</th>
                                    <th className="item">Item</th>
                                    <th className="num">Item Price</th>
                                    <th className="num">Item Total</th> 
                                </tr>
                            </thead>
                            <tbody id="#currentSale" style={{height: '600px'}}>

                            </tbody>                          
                            <tfoot>
                                <tr>
                                    <th>$69.69</th>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}

export default App;
