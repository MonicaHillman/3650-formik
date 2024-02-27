import React, { useState } from 'react';
import { Tipografia } from "../../componentes/Tipografia/Tipografia"
import { CampoTexto } from "../../componentes/CampoTexto/CampoTexto"
import { ListaSupensa } from "../../componentes/ListaSuspensa/ListaSuspensa"
import { Col, Row } from "react-grid-system"
import { Botao } from "../../componentes/Botao/Botao"
import { Link } from "react-router-dom"

const estadosBrasileiros = [
    { "text": "Acre", "value": "AC" },
    { "text": "Alagoas", "value": "AL" },
    { "text": "Amapá", "value": "AP" },
    { "text": "Amazonas", "value": "AM" },
    { "text": "Bahia", "value": "BA" },
    { "text": "Ceará", "value": "CE" },
    { "text": "Distrito Federal", "value": "DF" },
    { "text": "Espírito Santo", "value": "ES" },
    { "text": "Goiás", "value": "GO" },
    { "text": "Maranhão", "value": "MA" },
    { "text": "Mato Grosso", "value": "MT" },
    { "text": "Mato Grosso do Sul", "value": "MS" },
    { "text": "Minas Gerais", "value": "MG" },
    { "text": "Pará", "value": "PA" },
    { "text": "Paraíba", "value": "PB" },
    { "text": "Paraná", "value": "PR" },
    { "text": "Pernambuco", "value": "PE" },
    { "text": "Piauí", "value": "PI" },
    { "text": "Rio de Janeiro", "value": "RJ" },
    { "text": "Rio Grande do Norte", "value": "RN" },
    { "text": "Rio Grande do Sul", "value": "RS" },
    { "text": "Rondônia", "value": "RO" },
    { "text": "Roraima", "value": "RR" },
    { "text": "Santa Catarina", "value": "SC" },
    { "text": "São Paulo", "value": "SP" },
    { "text": "Sergipe", "value": "SE" },
    { "text": "Tocantins", "value": "TO" }
]
const DadosPessoais = () => {
    const [nome, setNome] = useState('')
    const [estado, setEstado] = useState('')
    const [cidade, setCidade] = useState('')
    const [telefone, setTelefone] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [confirmarSenha, setConfirmarSenha] = useState('')
    return (
        <form>
            <div style={{ textAlign: 'center' }}>
                <Tipografia variante="h1" componente="h1">
                    Crie seu cadastro
                </Tipografia>
                <Tipografia variante="body" componente="body">
                    Crie seu perfil gratuitamente para começar a trabalhar com os melhores freelancers. Em seguida, você poderá dar mais detalhes sobre suas demandas e sobre sua forma de trabalho.
                </Tipografia>
            </div>
            <Row>
                <Col>
                    <CampoTexto
                        titulo="Nome completo"
                        valor={nome}
                        onChange={setNome}
                        tipo='text'
                        required
                    />
                </Col>
            </Row>
            <Row>
                <Col lg={4} md={4} sm={4}>
                    <ListaSupensa
                        titulo="Estado"
                        opcoes={estadosBrasileiros}
                        valor={estado}
                        onChange={setEstado}
                    />
                </Col>
                <Col lg={8} md={8} sm={8}>
                    <CampoTexto
                        titulo="Cidade"
                        valor={cidade}
                        onChange={setCidade}
                        tipo='text'
                        required
                    />
                </Col>
            </Row>
            <Row>
                <Col lg={6} md={6} sm={6}>
                    <CampoTexto
                        titulo="E-mail"
                        valor={email}
                        onChange={setEmail}
                        tipo='email'
                        required
                    />
                </Col>
                <Col lg={6} md={6} sm={6}>
                    <CampoTexto
                        titulo="Telefone"
                        valor={telefone}
                        onChange={setTelefone}
                        tipo='tel'
                        required
                    />
                </Col>
            </Row>
            <Row>
                <Col lg={6} md={6} sm={6}>
                    <CampoTexto
                        titulo="Senha"
                        valor={senha}
                        onChange={setSenha}
                        tipo='password'
                        required
                    />
                </Col>
                <Col lg={6} md={6} sm={6}>
                    <CampoTexto
                        titulo="Confirme sua senha"
                        valor={confirmarSenha}
                        onChange={setConfirmarSenha}
                        tipo='password'
                        required
                    />
                </Col>
            </Row>
            <Row>
                <Col lg={6} md={6} sm={6}>
                    <Link to="/cadastro/interesses">
                        <Botao variante="secundaria">
                            Anterior
                        </Botao>
                    </Link>
                </Col>
                <Col lg={6} md={6} sm={6}>
                    <div style={{ textAlign: 'right' }}>
                        {/* <Link to='/cadastro/concluido'> */}
                        <Botao>
                            Próxima
                        </Botao>
                        {/* </Link> */}
                    </div>
                </Col>
            </Row>
        </form>



    );
};

export default DadosPessoais;