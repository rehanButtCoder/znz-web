import React from 'react'
import { Container } from 'react-bootstrap';
import style from './UserPledge.module.css'

function UserPledge() {
  return (
    <div>
      <Container className={style.UserPledge_main}>
        <h1>user pledge</h1>
      </Container>
    </div>
  )
}

export default UserPledge
