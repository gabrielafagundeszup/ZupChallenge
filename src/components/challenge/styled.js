import styled from 'styled-components'

export const Finalized = styled.div`
  background: ${({ theme }) => theme.palette.blues.dark};
  min-width: 300px;
  max-width: 700px;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.size16};
  border-radius: 5px;
`