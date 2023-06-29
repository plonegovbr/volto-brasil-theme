import Container from '@kitconcept/volto-light-theme/components/Atoms/Container/Container';
import eduSVG from '../../images/logos/portalbrasil-edu.svg';

const Signature = (props) => {
  const distribuicao = 'portal_edu';
  return (
    <Container layout className="signature">
      <span className="item powered-by">
        Desenvolvido pela comunidade{' '}
        <a href="https://plone.org.br/" target="_blank" rel="noreferrer">
          PloneGov-Br
        </a>{' '}
        utilizando o{' '}
        <a
          href="https://plone.org.br"
          target="_blank"
          rel="noreferrer"
          className={'distribuicao'}
        >
          <img
            src={eduSVG}
            className={distribuicao}
            alt={'Logo da Distribuição'}
          />
        </a>
        {'.'}
      </span>
    </Container>
  );
};

export default Signature;
