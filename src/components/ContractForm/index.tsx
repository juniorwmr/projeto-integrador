import React, { FormEvent, ReactNode, useEffect, useState } from 'react';

import AdminRepository, { IContracts } from '../../repositories/admin';
import { IEmployee } from '../../repositories/employee';

import {
  Container,
  Main,
  Form,
  Fieldset,
  InputField,
  InputGroup,
  SelectField,
  SelectInputField
} from './styles';

interface IContractFormProps {
  contracts: IContracts;
  action: (data: IContracts) => void;
  children: ReactNode;
  isEdit?: boolean;
}

const ContractForm: React.FC<IContractFormProps> = ({
  contracts,
  action,
  children,
  isEdit = false
}) => {
  const [id, setId] = useState(contracts.id || '');
  const [registration, setRegistration] = useState(
    contracts.registration || ''
  );
  const [admission, setAdmission] = useState(contracts.admission);
  const [city, setCity] = useState(contracts.city || '');
  const [type, setType] = useState(contracts.type);
  const [situation, setSituation] = useState(contracts.situation);
  const [contract, setContract] = useState(contracts.contract);
  const [employeeId, setEmployeeId] = useState(contracts?.employee?.id || '');
  const [employees, setEmployees] = useState<
    { value: string; label: string }[]
  >([]);
  const types = ['Efetivo', 'Temporário'];
  const situations = ['Em função', 'Emprestado', 'Afastado', 'Exonerado'];

  function onSubmitForm(event: FormEvent) {
    event.preventDefault();
    action({
      id,
      registration,
      admission,
      city,
      type,
      situation,
      contract,
      employeeId
    });
  }

  useEffect(() => {
    AdminRepository.listEmployees().then(res => {
      if (res?.data) {
        const options = res?.data?.map(employee => {
          return { value: employee.id, label: employee.name };
        });
        setEmployees(options);
      }
    });
  }, []);

  return (
    <Container>
      <Main>
        <Form onSubmit={(event: FormEvent) => onSubmitForm(event)}>
          <Fieldset>
            <legend>Informações Principais</legend>
            <InputField>
              <label htmlFor="contract">Contrato</label>
              <input
                id="contract"
                name="contract"
                onChange={e => setContract(Number(e.target.value))}
                value={contract}
              />
            </InputField>
            <InputField>
              <label htmlFor="registration">Nº Registro</label>
              <input
                id="registration"
                name="registration"
                disabled={isEdit}
                onChange={e => setRegistration(e.target.value)}
                value={registration}
              />
            </InputField>
            <InputGroup>
              <InputField>
                <label htmlFor="admission">Data de Admissão</label>
                <input
                  id="admission"
                  type="date"
                  name="admission"
                  onChange={e => setAdmission(e.target.value)}
                  value={admission}
                />
              </InputField>
              <InputField>
                <label htmlFor="city">Cidade</label>
                <input
                  id="city"
                  name="city"
                  disabled={isEdit}
                  onChange={e => setCity(e.target.value)}
                  value={city}
                />
              </InputField>
            </InputGroup>
            <SelectField>
              <label htmlFor="type">Tipo de Contrato</label>
              <select
                required
                value={type}
                name="type"
                onChange={e => setType(Number(e.target.value))}
              >
                {types.map((type: string, index: number) => (
                  <option key={index + 1} value={index + 1}>
                    {type}
                  </option>
                ))}
              </select>
            </SelectField>
            <SelectField>
              <label htmlFor="situation">Situação</label>
              <select
                required
                value={situation}
                name="situation"
                onChange={e => setSituation(Number(e.target.value))}
              >
                {situations.map((situation: string, index: number) => (
                  <option key={index + 1} value={index + 1}>
                    {situation}
                  </option>
                ))}
              </select>
            </SelectField>
            <InputField>
              <label htmlFor="type">Funcionário</label>
              <SelectInputField
                options={employees}
                onChange={(e: any) => setEmployeeId(e.value)}
              />
            </InputField>
          </Fieldset>
          {children}
        </Form>
      </Main>
    </Container>
  );
};

export default ContractForm;
