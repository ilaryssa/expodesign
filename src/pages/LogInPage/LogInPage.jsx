import './LogInPage.css';

export default function LogInPage() {
    const olaAdmin = "Olá, Admin! :)"
    return (
        <main>
        <div>{olaAdmin} </div>
            <section>
                <form>
                    <div className='log-in-label-input'>
                        <label className='' for='email' >Email institucional</label>
                        <input className='' type='email' id='email' aria-required/>
                    </div>
                    <div className='log-in-label-input'>
                        <label className='' for='password'>Senha</label>
                        <input className='' type='password' id='password' aria-required/>
                    </div>
                    <button type='submit'> Entrar</button>
                </form>
            </section>
        </main>
    )
}