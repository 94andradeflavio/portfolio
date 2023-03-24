import { AiOutlineGithub, AiFillLinkedin } from 'react-icons/ai';
import { Container } from './styles';

export function Footer() {
  function handleRedirect(url: string) {
    window.open(url);
  }

  function handleScrollTop() {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <Container>
      <div className="container">
        <button type='button' onClick={handleScrollTop}>Voltar ao topo</button>

        <section>
          <AiOutlineGithub
            onClick={() => handleRedirect('https://github.com/94andradeflavio')} />
          <AiFillLinkedin
            onClick={() => handleRedirect('https://www.linkedin.com/in/94andradeflavio/')} />
        </section>
      </div>
    </Container>
  );
}
