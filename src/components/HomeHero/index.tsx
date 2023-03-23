import { Container, TextContainer, InfosContainer } from './styles';
import picture from '../../assets/pessoa.webp';
import { InfoCard } from '../InfoCard';

export default function HomeHero() {
  return (
    <Container data-aos='fade-up'>
      <img src={picture} alt="Minha foto" />

      <div>
        <TextContainer>
          <h1>Olá</h1>
          <h2>Me chamo Flavio</h2>
        </TextContainer>
        
        <InfosContainer>
          <InfoCard comment='// Minha apresentação' title='Infos'>
            <div>
              Nome: <span className='blue'>Flavio</span>,
            </div>
            <div>
              Sobrenome: <span className='blue'>Andrade</span>
            </div>
          </InfoCard>

          <InfoCard title='Cargo' flex='end'>
            <div>
              Função: <span className='blue'>Front-End Developer</span>,
            </div>
            <div>
              Empresa: <span className='blue'>GP Strategies</span>
            </div>
          </InfoCard>
        </InfosContainer>

      </div>
    </Container>
  );
}
