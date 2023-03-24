import { SectionTitle } from '../SectionTitle';
import ExperienciaItem from './ExperienciaItem';
import { Container } from './styles';

export function Experiencias() {
  return (
    <Container>
      <SectionTitle title='04 Anos' description='de experiência' />

      <section>
        <ExperienciaItem 
          year="2022" 
          title="Desenvolvedor Front-End Pleno"
          enterprise="GP Strategies"
          description='Responsável pelo desenvolvimento de Front Pages, Revistas digitais, Games variados, e conteúdos voltados para a área de ensino online/presencial. Realizo a configuração do pacote SCORM via Javascript, função importante que busca as informações de progresso, dentre outros dados do aluno, e transfere para um arquivo XML, que faz a comunicação com a plataforma do cliente.' />
        <ExperienciaItem 
          year="2021" 
          title="Desenvolvedor Front-End"
          enterprise="E-Gratitude"
          description='Responsável pelo desenvolvimento de Lading Pages em PHP e JavaScript (Captação, Venda, Plataformas educacionais) de 3 grandes nomes da educação financeira, coaching e marketing digital. São eles Gustavo Cerbasi (Curso Inteligência Financeira, Curso Equilíbrio Financeiro), Gerônimo Theml (WA - Wide Awake, Formação em Coaching Criacional, Comunidade No Comando) e Rodrigo Vinhas (Comunidade Estrategistas Digitais, Mentoria Egrativê).' />
        <ExperienciaItem 
          year="2020" 
          title="Desenvolvedor Front-End"
          enterprise="Telefónica Educación Digital"
          description='Responsável pelo desenvolvimento de Front Pages, Revistas digitais, Games variados, e conteúdos voltados para a área de ensino online/presencial. Realizo a configuração do pacote SCORM via Javascript, função importante que busca as informações de progresso, dentre outros dados do aluno, e transfere para um arquivo XML, que faz a comunicação com a plataforma do cliente. Gerar links de validação via SFTP.' />
        <ExperienciaItem 
          year="2019" 
          title="Estagiário Front-End"
          enterprise="Telefónica Educación Digital"
          description='Responsável pelo desenvolvimento de Front Pages, Revistas digitais, Games variados, e conteúdos voltados para a área de ensino online/presencial. Realizo a configuração do pacote SCORM via Javascript, função importante que busca as informações de progresso, dentre outros dados do aluno, e transfere para um arquivo XML, que faz a comunicação com a plataforma do cliente. Gerar links de validação via SFTP.' />
      </section>
    </Container>
  );
}
