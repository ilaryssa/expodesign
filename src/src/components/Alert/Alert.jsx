import './Alert.css';

export default function Alert({setOpen, onConfirm, message = "", question="", confirm="", cancel=""}){
    // eu que escolhi o nome message, question, confirm e cancel, mas podemos mudar depois
    return (
        <div className='alert-background'>
            <div className='alert-container'>
                <div className='alert-body'>
                    
                    <p className='alert-message'>{message}</p>

                    <h4 className='alert-question'>{question}</h4> 

                    <div className='alert-actions'>
                        <button onClick={() => setOpen(false)} className='cancel'>{cancel}</button>
                        <button onClick={onConfirm} className='confirm'>{confirm}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}