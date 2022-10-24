import React, {useState} from 'react';
import BaseLayout from '../../components/coreLayout/BaseLayout';
import Button from '../../components/button/Button';
import styles from './formPage.module.css';
import SelectForm from '../../components/select/SelectForm';
import axios from 'axios';

const FormPage = () => {
  const [feeling,setFeeling] = useState('');
  const [desire,setDesire] = useState('');
  const [errorFeeling,setErrorFeeling] = useState('');
  const [errordesire,setErrorDesire] = useState('');

  function handleFormQ1(option){
    setFeeling(option.value);
  }

  function handleFormQ2(option){
    setDesire(option.value);
  }

  async function handleSendRequest(event) {
    event.preventDefault();

    if ((feeling === '' || feeling == null)) {
      setErrorFeeling('Por favor, selecione uma opção');
    }
    if ((desire === '' || desire == null)) {
      setErrorDesire('Por favor, selecione uma opção');
      return
    }

    if (feeling && desire) {
      const randomGenderByFeelingArray = feeling.split(',');
      const feelingGender = randomGenderByFeelingArray[Math.floor(Math.random()*randomGenderByFeelingArray.length)];

      const randomGenderByDesireArray = desire.split(',');
      const desireGender = randomGenderByDesireArray[Math.floor(Math.random()*randomGenderByDesireArray.length)];
      
      const responseData = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_MOVIE_FINDER_API_KEY}&with_genres=${feelingGender},${desireGender}`);
      const allMovies = responseData.data.results;

      console.log(allMovies);
    }
  }

  const optionsQ1 = [
    {
      value: '16,35,12', label: 'Feliz',
    },
    {
      value: '80,18', label: 'Triste',
    },
    {
      value: '53,27', label: 'Com medo',
    },
    {
      value: '28,80,10752', label: 'Com Raiva',
    },
  ]

  const optionsQ2 = [
    {
      value: '16,35,12', label: 'Mais feliz',
    },
    {
      value: '80,18', label: 'Mais triste',
    },
    {
      value: '53,27', label: 'Com mais medo',
    },
    {
      value: '28,80,10752', label: 'Com mais raiva',
    },
  ]
  return (
    <BaseLayout>
      <form className={styles.mainContent} onSubmit={handleSendRequest}>
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
          {feeling ? '' : <span style={{color:'red'}}>{errorFeeling}</span>}
          <SelectForm
            options={optionsQ2}
            placeholderSelect={'Como você desire se sentir?'}
            name={'desire-sentir'}
            className={styles.q2}
            onChange={handleFormQ2}
          />
          {desire ? '' : <span style={{color:'red'}}>{errordesire}</span>}
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