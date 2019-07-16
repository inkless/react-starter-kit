import styled, { css } from 'styled-components';
import Text from '@src/components/base/Typography/Text';

export type Props = {
  variant?: 'primary' | 'secondary' | 'error' | 'disabled';
};

const colorStyle = css<Props>`
  ${({ theme, variant }) => {
    if (!variant) return '';
    return `
      background-color: ${theme.colors[variant].main};
      color: ${theme.colors[variant].contrast};
    `;
  }};
`;

export const Badge = styled(Text)<Props>`
  display: inline-block;
  font-weight: normal;
  letter-spacing: 0.0375em;
  line-height: 1.25;
  ${colorStyle};
  ${props => props.theme.Badge};
`;

Badge.defaultProps = {
  borderRadius: 2,
  px: 2,
  py: 1,
  fontSize: 1,
  variant: 'primary',
};

export default Badge;
