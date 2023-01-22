import { useNavigate } from 'react-router'

import styled, { css } from 'styled-components'

import { FaSkiing, FaAddressCard, FaUser } from 'react-icons/fa'


interface NavLinkProps {
  icon: string;
  path: string;

  active?: boolean;

}

const NavLink: React.FC<NavLinkProps> = ({ icon, path, active }) => {

  const navigate = useNavigate();

  const renderIcon = () => {
    if (icon === 'skiier') {
      return <FaSkiing size={40} color='#eee' />
    } else if (icon === 'contact') {
      return <FaAddressCard size={40} color='#eee' />
    } else if (icon === 'about') {
      return <FaUser size={40} color='#eee' />
    }
  }

  return (
    <IconWrapper 
      active={active}
      onClick={() => navigate(path)}
    >
      {renderIcon()}
    </IconWrapper>
  )
}

const IconWrapper = styled.div<{ active?: boolean }>`
  ${({ active }) => css`

    display: flex;

    width: 55px;
    height: 55px;

    border-radius: 20%;

    opacity: ${active ? '1.0' : '0.4'};

    background: #1c648e;

    margin: 20% 20%;

    justify-content: center;
    align-items: center;

    transition: 0.2s;

    &:hover {
      opacity: 1.0;
    }

  `}
`;

export default NavLink
