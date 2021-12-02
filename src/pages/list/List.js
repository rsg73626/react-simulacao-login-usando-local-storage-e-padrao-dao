
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import dao from "../../utils/UsersDAO";
import "./List.css";

function List() {
    const navigate = useNavigate();

    const deletar = () => {
        alert("Clicou no botão para remover um item.");
    }

    return (
        <>
            { dao.isLogged() ? <Link to="/"  onClick={ () => { dao.logoff() } }>Sair</Link> : <Link to="/login">Logar</Link> }
            <main>
                <h1>Itens cadastrados</h1>
                {
                    [1,2,3,4,5].map(
                        item => {
                            return (
                                <div key={item}>
                                    <p>Item {item}</p>
                                    { dao.isLogged() ? <button type="button" onClick={deletar} >Deletar</button> : ""}
                                </div>
                            )
                        }
                    )
                }
            </main>
        </>
    );

    // if (dao.isLogged()) {
    //     return (
    //         <>
    //             <Link 
    //                 to="/login"
    //                 onClick={
    //                     () => {
    //                         dao.logoff();
    //                     }
    //                 }
    //             >Sair</Link>
    //             <main>
    //                 <h1>Usuário logado.</h1>
    //                 <h2>Itens cadastrados</h2>
    //                 {[1,2,3,4,5].map(item => <p key={item}>Item {item}</p>)}
    //             </main>
    //         </>
    //     )
    // } else {
    //     return (
    //         <main>
    //             <section>
    //                 <h1>É necessário estar logado para acessar essa área do site.</h1>
    //                 <Link to="/login">Realizar login</Link>
    //             </section>
    //         </main>
    //     )
    // }
}

export default List;