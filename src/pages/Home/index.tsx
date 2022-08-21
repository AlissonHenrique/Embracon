 
import * as yup from 'yup';
import logoEmbracon from "../../assets/embracon-logo.svg"
import logoEmbracon2 from "../../assets/embracon-logo.png"
import iconeCasa from "../../assets/icone-casa.svg"
import {  useState } from 'react'
import { apiCep } from '../../service/viaCep'
import { Footer } from '../../components/Footer';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import ICep from './ICep';
import Switch from 'react-switch';
import { Container } from './styles';
import { ThemeContext } from 'styled-components';
import   { useContext } from 'react';

 interface Props {
    toggleTheme(): void;
  }

const schema = yup.object().shape({
    nome: yup.string().required("*Preencha o campo Nome"),   
    email: yup.string().email().required("*Preencha o campo Email"),
    cep: yup.string().required("*Preencha o campo Cep"),
    bairro: yup.string().required("*Preencha o campo Bairro"),
    cidade: yup.string().required("*Preencha o campo Cidade"),
    logradouro:yup.string().required("*Preencha o campo Logradouro"),
    estado:yup.string().required("*Preencha o campo Estado"),
  }).required();




export  function Home({ toggleTheme }:Props) {
   

        const [nome,setNome]=useState('')
        const [email,setEmail]=useState('')
        const [cep,setCep]=useState('')
        const [logradouro,setLogradouro]=useState('')
        const [complemento,setComplemento]=useState('')
        const [bairro,setBairro]=useState('')
        const [cidade,setCidade]=useState('')
        const [estado,setEstado]=useState('')

        const { register, handleSubmit, formState: { errors } } = useForm<ICep>({
            resolver: yupResolver(schema)
          });

   const { colors, title } = useContext(ThemeContext);       

 function onSubmit(data:ICep) {
   
    console.log(data)
   
 
}

 function handleBuscaCep():void {
           
            
         apiCep(cep).then(res => {
             
            setBairro(res.data.bairro)
            setCidade(res.data.localidade)
            setLogradouro(res.data.logradouro)
            setEstado(res.data.uf)


         },err => console.log(err))
    }

  return (
    <Container>
    <section className="container" id="incio">
       <header>
            <div className="container-header">
                {
                    colors.logo === 'light' ? (
                        <img src={logoEmbracon} alt="Embracon" /> 

                    ):(
                        <img src={logoEmbracon2} alt="Embracon" /> 
                    )
                }

                <nav>
                    <ul>
                        <li><AnchorLink href="#incio" title="Início">Início</AnchorLink></li>
                        <li><AnchorLink href="#produto" title="Produto">Produto</AnchorLink></li>
                        <li><AnchorLink href="#formulario" title="Formulário">Formulário</AnchorLink></li>
                    </ul>
                </nav>
            </div>
            <Switch
                onChange={toggleTheme}
                checked={title === 'dark'}
                checkedIcon={false}
                uncheckedIcon={false}
                height={10}
                width={40}
                handleDiameter={20}
                offColor={colors.textSecondary}
                onColor={colors.textSecondary}
                offHandleColor={colors.secundary}
                onHandleColor={colors.secundary}
             />
       </header>

    </section>
     
    <section className="container-gray" id="produto">
            <div className='container-gray-content'>
                <div className='container-gray-content-box'>
                    <h2>Lorem ipsum dolor </h2>
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Ex temporibus aliquid dolores? Incidunt, animi optio
                    corrupti expedita saepe harum rerum beatae neque voluptatem nostrum aliquam, maxime ab? Vel, veritatis nobis?
                    </p>
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Ex temporibus aliquid dolores? Incidunt, animi optio
                    corrupti expedita saepe harum rerum beatae neque voluptatem nostrum aliquam, maxime ab? Vel, veritatis nobis?
                    </p>
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Ex temporibus aliquid dolores? Incidunt, animi optio
                    corrupti expedita saepe harum rerum beatae neque voluptatem nostrum aliquam, maxime ab? Vel
                    </p>
                </div>
                <div className="container-gray-content-card">
                    <img src={iconeCasa} alt="Consórcio de imóvei" />  
                    <h3>Consórcio de imóveis</h3>
                    <p>Agora é a hora de pôr a champanhe para gelar, afinal, você está bem perto da realização do seu sonho.</p>
                    <AnchorLink href="#formulario"><button type="button">Inscreva-se!</button></AnchorLink>
                </div>
            </div>
    </section> 
    <section className="container-form" id="formulario" >
        
            <form  onSubmit={handleSubmit(onSubmit)}   >
                <div className='box-inp-first'>
                    <div className='box-inp-2'>
                        <label htmlFor="nome">Nome*</label>
                        <input 
                         type="text"                          
                         id="nome" 
                         {...register("nome")}
                         placeholder='Digite seu nome'
                         value={nome}
                         onChange={(e) => setNome(e.target.value)}
                         />
                         <p className='error'>{errors.nome?.message}</p>
                    </div>
                    <div className='box-inp-2'>
                        <label htmlFor="email">Email*</label>
                        <input 
                        type="email" 
                        {...register("email")}
                        name="email" 
                        id='email'
                        placeholder='Digite seu email' 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}                        
                        />
                        <p className='error'>{errors.email?.message}</p>
                    </div>
                </div>
                <div  className='form-box'>
                    <div className='box-inp'>
                        <label htmlFor="cep" >Cep*</label>
                        <input 
                        type="text" 
                        {...register("cep")}
                        name="cep" 
                        id="cep" 
                        placeholder='Digite seu Cep'
                        value={cep}
                        onChange={e => setCep(e.target.value)}
                        onMouseOut={handleBuscaCep}
                        />
                         <p className='error'>{errors.cep?.message}</p>
                    </div>
                    <div className='box-inp'>
                        <label htmlFor="logradouro">Rua*</label>
                        <input 
                        type="text" 
                        {...register("logradouro")}
                        name="logradouro" 
                        id="Logradouro" 
                        placeholder='Logradouro'
                        value={logradouro}
                        onChange={(e) => setLogradouro(e.target.value)}
                        />
                         <p className='error'>{errors.logradouro?.message}</p>
                    </div>
                    
                </div>
                <div  className='form-box'>
                    <div className='box-inp'>
                        <label htmlFor="complemento">Complemento</label>
                        <input 
                        type="text" 
                        name="complemento" 
                        id="complemento" 
                        placeholder="Digite seu Complemento"
                        value={complemento}
                        onChange={(e) => setComplemento(e.target.value)}
                        />
                        
                    </div>
                    <div className='box-inp'>
                        <label htmlFor="bairro">Bairro*</label>
                        <input 
                        type="text" 
                        {...register("bairro")}
                        name="bairro" 
                        id="bairro" 
                        placeholder="Digite seu bairro"
                        value={bairro}
                        onChange={(e) => setBairro(e.target.value)}
                        />  
                        <p className='error'>{errors.bairro?.message}</p>
                    </div>                
                </div>
                <div  className='form-box'> 
                    <div className='box-inp'>
                        <label htmlFor="cidade">Cidade*</label>                
                        <input 
                        type="text" 
                        {...register("cidade")}
                        name="cidade" 
                        id="cidade" 
                        placeholder="Digite sua cidade"
                        value={cidade}
                        onChange={(e) => setCidade(e.target.value)}
                        />
                        <p className='error'>{errors.cidade?.message}</p>
                    </div>
                    <div className='box-inp'> 
                        <label htmlFor="estado">Estado*</label>
                        <input type="text" 
                        {...register("estado")}
                        name="estado" 
                        id="estado" 
                        placeholder="Digite seu estado" 
                        value={estado}
                        onChange={(e) => setEstado(e.target.value)}
                        />
                        <p className='error'>{errors.estado?.message}</p>
                    </div>
                </div>
                <button type="submit">Enviar</button>
            </form>
            </section>         
        
        <Footer/>
    </Container>
  )
}
