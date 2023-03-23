import { SectionTitle } from '../SectionTitle';
import ExperienciaItem from './ExperienciaItem';
import { Container } from './styles';

export function Experiencias() {
  return (
    <Container>
      <SectionTitle title='05 Anos' description='de experiência' />

      <section>
        <ExperienciaItem 
          year="2023" 
          title="Dev Front-End"
          description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, deleniti.' />
        <ExperienciaItem 
          year="2022" 
          title="Dev Front-End"
          description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, deleniti.' />
        <ExperienciaItem 
          year="2021" 
          title="Dev Front-End"
          description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, deleniti.' />
        <ExperienciaItem 
          year="2019" 
          title="Dev Front-End"
          description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, deleniti.' />
      </section>
    </Container>
  );
}
