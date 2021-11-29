import { useState } from 'react';
import { FiCheck } from 'react-icons/fi';
import Loader from 'react-loader-spinner';
import { useHistory } from 'react-router';
import { toast } from 'react-toastify';
import Dashboard from '../../../../components/Dashboard/Admin';
import ContractForm from '../../../../components/ContractForm';
import AdminRepository, { IContracts } from '../../../../repositories/admin';
import { IEmployee } from '../../../../repositories/employee';
import { ContainerButtons, ConfirmButton } from './styles';

function RegisterContracts() {
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const defaultContracts = {
    id: '',
    registration: '',
    admission: '',
    city: '',
    type: 0,
    situation: 0,
    contract: 0
  };

  async function createContract(contract: IContracts) {
    setLoading(true);
    delete contract.id;
    const response = await AdminRepository.registerContract(contract);
    if (response?.status === 201) {
      toast.success('Cadastro realizado com sucesso!');
      history.push('/admin/dashboard');
    } else {
      toast.error('Não foi possível cadastrar, tente novamente!');
    }
    setLoading(false);
  }

  return (
    <Dashboard title="Cadastrar Funcionário" isNewEmployeePage={true}>
      <ContractForm
        contracts={defaultContracts}
        action={createContract}
        isEdit={false}
      >
        <ContainerButtons>
          <ConfirmButton type="submit">
            {!loading ? (
              <>
                <FiCheck style={{ marginRight: 10 }} size={20} color="#FFF" />
                Confirmar
              </>
            ) : (
              <Loader type="Puff" color="#cecece" height={40} width={40} />
            )}
          </ConfirmButton>
        </ContainerButtons>
      </ContractForm>
    </Dashboard>
  );
}
export default RegisterContracts;
