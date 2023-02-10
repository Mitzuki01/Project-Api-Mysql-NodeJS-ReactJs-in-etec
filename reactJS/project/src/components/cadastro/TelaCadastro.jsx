import React from "react";
import { Link } from "react-router-dom";
import {toast} from 'react-toastify'
import Style from "./Style.css"

function Cadastro(){

    function handleLogin(e){
        e.preventDefault();
        toast.success('🦄 pego!!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
    }

    return(

 <div className="background">

<form>
    
    <div>
        <input type="text" name="nome" placeholder="Your name..." class="text_area"/>
    </div>
    <div>
        <input type="email" name="email" placeholder="Your email..." class="text_area"/>
    </div>
    
    <div>
        <input type="password" name="senha" placeholder="password..." class="text_area" id="senha"/>
    </div>
    <div>
        <input type="password" name="confirma_senha" placeholder="confirm your password..." class="text_area" id="senha"/>
    </div>

    <div >
         <input type="submit" name="subject" value="REGISTRATION" class="button"/ > 
    </div> 

    <div >
    <Link to='login'>
        <input type="submit" name="subject" value="LOGIN" class="button"/>
    </Link>
    </div>

    <button variant="primary" type="submit"
        onClick={handleLogin}
    >
       <h1>teste</h1>
    </button>


   
</form>
    
       </div>
    )
}

export default Cadastro