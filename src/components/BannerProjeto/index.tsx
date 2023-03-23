import { Container } from './styles';

interface BannerProjetoProps {
  title: string;
  type: string;
  imgUrl: string;
}

export function BannerProjeto({ title, type, imgUrl }: BannerProjetoProps) {
  return (
    <Container imgUrl={ imgUrl } data-aos='fade-up'>
      <div className="overlay" />

      <section data-aos='fade-right' data-aos-delay='300'>
        <h1>{ title }</h1>
        <h2>{ type }</h2>
      </section>
    </Container>
  );
}
