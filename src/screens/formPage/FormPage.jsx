import React, {useState} from 'react';
import BaseLayout from '../../components/coreLayout/BaseLayout';
import Button from '../../components/button/Button';
import styles from './formPage.module.css';
import SelectForm from '../../components/select/SelectForm';

const FormPage = () => {
  const [sentimento,setSentimento] = useState('');
  const [deseja,setDeseja] = useState('');
  const [errorSentimento,setErrorSentimento] = useState('');
  const [errorDeseja,setErrorDeseja] = useState('');

  function gerarFilme(event) {
    event.preventDefault();
    if ((sentimento === '' || sentimento == null)) {
      setErrorSentimento('Por favor, selecione uma opção')
    }
    if ((deseja === '' || deseja == null)) {
      setErrorDeseja('Por favor, selecione uma opção')
      return
    }
  }

  function handleFormQ1(option){
    setSentimento(option.value);
  }

  function handleFormQ2(option){
    setDeseja(option.value);
  }

  const optionsQ1 = [
    {
      value: 'feliz', label: 'Feliz',
    },
    {
      value: 'triste', label: 'Triste',
    },
    {
      value: 'medo', label: 'Com medo',
    },
    {
      value: 'raiva', label: 'Com Raiva',
    },
  ]

  const optionsQ2 = [
    {
      value: 'feliz', label: 'Mais feliz',
    },
    {
      value: 'triste', label: 'Mais triste',
    },
    {
      value: 'medo', label: 'Com mais medo',
    },
    {
      value: 'raiva', label: 'Com mais raiva',
    },
  ]
  return (
    <BaseLayout>
      <form className={styles.mainContent} onSubmit={gerarFilme}>
        <h1 className={styles.mainContentTitle}>
          Movie Finder
        </h1>
        <div className={styles.formWrapper}>
          <SelectForm
            options={optionsQ1}
            placeholderSelect={'Qual o sentimento que melhor te define no momento?'}
            name={'qual-sentimento'}
            id={'q1'}
            onChange={handleFormQ1}
          />
          {sentimento ? '' : <span style={{color:'red'}}>{errorSentimento}</span>}
          <SelectForm
            options={optionsQ2}
            placeholderSelect={'Como você deseja se sentir?'}
            name={'deseja-sentir'}
            className={styles.q2}
            onChange={handleFormQ2}
          />
          {deseja ? '' : <span style={{color:'red'}}>{errorDeseja}</span>}
        </div>

        <Button
          fontSize="1.5rem"
          padding="2% 4%"
          marginTop="auto"
          borderColor="#373F47"
          type="submit"
        >
          Encontrar Filme
        </Button>

      </form>
    </BaseLayout>
  )
}

export default FormPage