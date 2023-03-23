import { ReactNode } from 'react';
import { CodeItem } from './styles';

interface InfoCardProps {
  children: ReactNode;
  comment?: string;
  flex?: string;
  title: string;
}

export function InfoCard({ children, comment, title, flex }: InfoCardProps) {
  return (
    <CodeItem flex={ flex } data-aos='zoom-in'>
      <span className='comment'>{ comment }</span>
      <span className='purple'>{ title }</span> {'\u007b'}
      { children }
      {'\u007d'}
    </CodeItem>
  );
}
