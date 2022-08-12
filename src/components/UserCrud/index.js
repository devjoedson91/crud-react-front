import React, { useEffect, useState } from "react";
import Main from "../Main";
import './styles.css';
import Icons from "../Icons";
import Modal from "react-modal";
import ModalUsers from '../ModalUsers';
import { Link } from 'react-router-dom';
import { api } from "../../services/api";
import { toast } from "react-toastify";

const headerProps = {
    icon: 'users',
    title: 'Usuarios',
    subtitle: 'Listagem de Usuarios'
}

export default function UserCrud(props) {

    const [users, setUsers] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [modalUser, setModalUser] = useState();
    const [formVisible, setFormVisible] = useState(false);
    const [idUser, setIdUser] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {

        async function getUsers() {

            const response = await api.get();

            setUsers(response.data);

        }

        getUsers();

    }, []);


    function handleCloseModal() {
        setModalVisible(false);
    }

    async function handleOpenModal(userId) {

        const user = await api.get(`/${userId}`);

        setModalUser(user.data);
        setModalVisible(true);

    }

    async function handleRemoveUser() {

        await api.delete(`/${modalUser.id}`);

        const response = await api.get();

        setUsers(response.data);

        setModalVisible(false);
        toast.success('Usuario excluido sucesso!');

    }

    async function openEditForm(userId) {

        const user = await api.get(`/${userId}`);

        const { id, name, email } = user.data;

        setIdUser(id);
        setName(name);
        setEmail(email);

        setFormVisible(true);

    }

    async function handleEditUser() {

        await api.put(`/${idUser}`, {
            name: name,
            email: email
        });

        toast.success('Usuario alterado com sucesso!');
        setFormVisible(false);

        const response = await api.get();
        setUsers(response.data);

    }

    Modal.setAppElement('#root');

    return (

        <Main {...headerProps}>

            <div className={`form ${formVisible ? 'd-block' : 'd-none'}`}>
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
                        <button className="btn btn-primary" onClick={handleEditUser}>Salvar</button>
                        <button className="btn btn-secondary ml-2" onClick={() => setFormVisible(false)}>Cancelar</button>
                    </div>
                </div>
            </div>

            <table className="table mt-4">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NOME</th>
                        <th>EMAIL</th>
                        <th>AÇÔES</th>
                    </tr>
                </thead>
                <tbody>

                    {users.length === 0 && (
                        <tr>
                            <td><span>Nenhum usuario encontrado</span></td>
                        </tr>
                    )}

                    {users.map(item => {

                        return (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item?.name}</td>
                                <td>{item?.email}</td>
                                <td>
                                    <button className="btn btn-warning" onClick={() => openEditForm(item.id)}><Icons type="pencil" size={20} /></button>
                                </td>
                                <td>
                                    <button className="btn btn-danger" onClick={() => handleOpenModal(item.id)}><Icons type="trash" size={20} /></button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>

            <div className="col-12 d-flex justify-content-end">
                <Link className="btn btn-primary" to="/register">Novo</Link>
            </div>

            {modalVisible && (
                <ModalUsers
                    isOpen={modalVisible}
                    onRequestClose={handleCloseModal}
                    handleRemoveUser={handleRemoveUser}
                />
            )}

        </Main>


    );

}