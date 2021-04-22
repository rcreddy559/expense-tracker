import React , {useContext} from 'react'
import { GlobalContext } from "./context/GlobalState";
import { useInput } from './hooks/useInput';

export const AddTransaction = () => {
        const {addTransaction} = useContext(GlobalContext);

    const [text, bindText] = useInput('', "Enter text...");
    const [amount, bindAmount] = useInput('', "Enter amount...");

    const handleAddTransaction = ()=>{
        const t = {
                id: Math.floor(Math.random()* 1000000),
                text,
                amount: parseInt(amount)}
                addTransaction(t)
    }
    
    return <>
            <h3>Add new transaction</h3>
            
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" 
                            id="text" 
                            {...bindText} />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">Amount <br />
            (negative - expense, positive - income)</label>
                    <input type="number" 
                            id="amount" 
                            {...bindAmount} />
                </div>
                <button className="btn" onClick={handleAddTransaction}>Add transaction</button>
             
        </>
}
