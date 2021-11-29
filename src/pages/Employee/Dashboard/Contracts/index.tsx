import React, { useCallback, useEffect, useState } from 'react';

import Dashboard from '../../../../components/Dashboard/Employee';

import { Container, Item, Footer, ImgContainer, Body } from './styles';

import EmployeeRepository from '../../../../repositories/employee';

import { useLoadingContext } from '../../../../hooks/useLoading';
import { IContracts } from '../../../../repositories/admin';

const PendentOrphanages: React.FC = () => {
  const { handleLoading } = useLoadingContext();
  const [contracts, setContracts] = useState<IContracts[]>([]);

  enum ISituationContract {
    'em função' = 1,
    'emprestado' = 2,
    'afastado' = 3,
    'exonerado' = 4
  }

  useEffect(() => {
    EmployeeRepository.listContracts().then(res => {
      if (res?.data) {
        setContracts(res?.data);
      }
    });
  }, []);

  return (
    <Dashboard title="Meus Contratos" isContractsPage={true}>
      {!contracts?.length ? (
        <ImgContainer>
          <p>Nenhum no momento</p>
        </ImgContainer>
      ) : (
        <Container>
          {contracts?.map(contracts => (
            <Item key={contracts.id}>
              <Body>
                <h2>{contracts.employee?.name.trim().split(' ')[0]}</h2>
                <p>Nº {contracts.registration}</p>
                <p>Admissão: {contracts.admission}</p>
                <h3>{contracts.city}</h3>
              </Body>
              <Footer>
                <h4>Situação: {ISituationContract[contracts.situation]}</h4>
              </Footer>
            </Item>
          ))}
        </Container>
      )}
    </Dashboard>
  );
};

export default PendentOrphanages;
