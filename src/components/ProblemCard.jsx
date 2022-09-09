import React from 'react'
import {styled, Typography} from "@mui/material";

export function ProblemCard(props) {
  const {id, name, link, answer} = props
  return (

      <Root key={id}>
        <Title variant={'h5'}>{name}</Title>
        <div>Answer: {answer}</div>
        <a href={link}>link</a>
      </Root>
  )
}

const Root = styled('div')(({theme}) => ({
  display: 'flex',
  flexDirection: 'column',
  border: '3px solid black',
  margin: '10px 0',
  padding: '10px',
  borderRadius: '10px'
}))

const Title = styled(Typography)(({theme}) => ({
  textAlign: 'center',
  borderBottom: '1px solid black'
}))