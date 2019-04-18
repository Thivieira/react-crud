import React from 'react';
import BaseLayout from '../layouts/BaseLayout';
import { Link } from 'react-router-dom';

export default () => (
  <BaseLayout>
    <div
      className="d-flex flex-column align-items-center justify-content-center"
      style={{
        height: '100%',
        position: 'absolute',
        width: '100%'
      }}
    >
      <h1
        class="display-5"
        style={{
          textAlign: 'center'
        }}
      >
        Caminho não encontrado
      </h1>
      <Link to="/">Voltar a página inicial</Link>
    </div>
  </BaseLayout>
);
