import React, { useState } from "react";
import Main from "../Main";
import { toast } from 'react-toastify';
import { api } from "../../services/api";

const headerProps = {
    icon: 'users',
    title: 'Usuarios',
    subtitle: 'Cadastro de Usuarios'
}

export default function Form() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    async function save() {

        if (name === '' && email === '') {
            toast.warning('Preencha os dados!');
            return;
        }

        try {

            await api.post('/',{
                name: name,
                email: email
            });
    
            toast.success('Usuario salvo com sucesso!');
            setEmail('');
            setName('');

        } catch(err) {

            console.log('Erro na requisicao: ', err);
            toast.error('Erro ao cadastrar usuario');

        }


    }

    function clear() {

        setName('');
        setEmail('');

    }

    return (

        <>
            <Main {...headerProps}>

                <div className="form">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <div className="form-group">
                                <label>Nome</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="name"
                                    value={name}
                                    placeholder="Digite o nome"
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="col-12 col-md-6">
                            <div className="form-group">
                                <label>Email</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="email"
                                    value={email}
                                    placeholder="Digite o email"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>

                    <hr />

                    <div className="row">
                        <div className="col-12 d-flex justify-content-end">
                            <button className="btn btn-primary" onClick={save}>Salvar</button>
                            <button className="btn btn-secondary ml-2" onClick={clear}>Cancelar</button>
                        </div>
                    </div>
                </div>

            </Main>

        </>

    );

}