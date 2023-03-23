import { SectionTitle } from '../SectionTitle';
import ProjetoItem from './ProjetoItem';
import { Container } from './styles';
import Link from 'next/link';
import { ProjetosProps } from '../../types/Projetos';


export function Projetos({ projetos }: ProjetosProps) {

  return (
    <Container>
      <SectionTitle title='Ultimos Projetos' />

      <section>
        { projetos.slice(0, 3).map(projeto => (
          <ProjetoItem 
            key={ projeto.slug }
            img={ projeto.thumbnail }
            title={ projeto.title }
            type={ projeto.type }
            slug={ projeto.slug } />
        )) }
      </section>

      <button type='button'>
        <Link href="/projetos">
          <a>Ver todos os projetos</a>
        </Link>
      </button>
    </Container>
  );
}
