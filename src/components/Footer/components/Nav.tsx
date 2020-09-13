import React from 'react'
import styled from 'styled-components'

const Nav: React.FC = () => {
  return (
    <StyledNav>
      <StyledLink
        target="_blank"
        href="https://uniswap.info/pair/0x6b4a0bd2eee3ca06652f758844937daf91ea8422"
      >
        Uniswap BOOSTED-ETH
      </StyledLink>
      <StyledLink target="_blank" href="http://discord.gg/gp9bsaQ">
        Discord
      </StyledLink>
      <StyledLink target="_blank" href="https://github.com/boosted-finance">
        Github
      </StyledLink>
      <StyledLink target="_blank" href="https://twitter.com/BoostedFinance">
        Twitter
      </StyledLink>
    </StyledNav>
  )
}

const StyledNav = styled.nav`
  align-items: center;
  display: flex;
`

const StyledLink = styled.a`
  color: ${(props) => props.theme.color.grey[400]};
  padding-left: ${(props) => props.theme.spacing[3]}px;
  padding-right: ${(props) => props.theme.spacing[3]}px;
  text-decoration: none;
  &:hover {
    color: ${(props) => props.theme.color.grey[500]};
  }
`

export default Nav
