import Colaborador from '../Colaborador'
import './time.css'

const Time = (props) => {

  const cssSecundaria = {backgroundColor: props.corSecundaria}
  const cssPrimaria = {borderColor: props.corPrimaria}

  return (
    (props.colaboradores.length > 0) && <section className='time' style={cssSecundaria}>
      <h3 style={cssPrimaria}>
        {props.nome}
      </h3>
      <div className='colaboradores'>
        {props.colaboradores.map( colaborador => <Colaborador corDeFundo={props.corPrimaria} key={colaborador.nome} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem}/>)}
      </div>
      
    </section>
  )
}

export default Time