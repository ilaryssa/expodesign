import './Alert.css';

export default function Alert({setOpen, onConfirm}) {
    return (
        <div className='alert-background'>
            <div className='alert-container'>
                <div className='alert-body'>
                    <h4 className='alert-title'>Você tem certeza que quer sair?</h4> 
                    <div className='alert-actions'>
                        <button onClick={() => setOpen(false)} className='cancel'>Voltar</button>
                        <button onClick={onConfirm} className='confirm'>Sair</button>
                    </div>
                </div>
            </div>
        </div>
    )
}