import styled from 'styled-components';

interface InfoCardProps {
    flex?: string | 'start';
}

export const CodeItem = styled.pre<InfoCardProps>`
    background: ${({ theme }) => theme.gradient};
    padding: 2rem;
    font-family: 'JetBrains Mono', monospace;
    font-weight: 300;
    color: #fff;
    width: 24rem;
    align-self: ${props => `flex-${ !props.flex ? 'start' : props.flex }`};
    transition: 1s !important;

    &:hover {
        filter: brightness(1.2);
    }

    > div {
        margin: 0.2rem 0;
        margin-left: 1rem;
    }

    span.purple {
        color: #c38cdd;
    }
    span.blue {
        color: #7ac7e3;
    }
    span.comment {
        color: ${({ theme }) => theme.text};
        margin-bottom: 1rem;
        display: block;
    }

    @media(max-width:1450px) {
        width: 18rem;
        padding: 1.5rem;
        font-size: .8rem;
    }
    @media(max-width:1000px) {
        width: 100%;
    }
`