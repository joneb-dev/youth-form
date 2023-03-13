import React, { useState } from 'react';
import {Link,} from "react-router-dom";
import BasicCard from '../Card'

import {
  Container, 
} from '@material-ui/core'

export default function Footer() {
    return (
    <>
      <Container maxWidth='md' alignItems='center'>
        <Link to="/youth">
          <BasicCard name='Youth Registration'>
          </BasicCard>
        </Link>
        <Link to="/church">
          <BasicCard name='Church Registration'>
          </BasicCard>
        </Link>
        <Link to="/children">
          <BasicCard name="Children's Church Registration">
          </BasicCard>
        </Link>
      </Container>
    </>
    );
}
