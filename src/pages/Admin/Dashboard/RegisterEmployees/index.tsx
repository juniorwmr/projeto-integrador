import { useState } from 'react';
import { FiCheck } from 'react-icons/fi';
import Loader from 'react-loader-spinner';
import { useHistory } from 'react-router';
import { toast } from 'react-toastify';
import Dashboard from '../../../../components/Dashboard/Admin';
import EmployeeForm from '../../../../components/EmployeeForm';
import AdminRepository from '../../../../repositories/admin';
import { IEmployee } from '../../../../repositories/employee';
import { ContainerButtons, ConfirmButton } from './styles';

function RegisterEmployees() {
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const defaultEmployee = {
    id: '',
    name: '',
    passowrd: '',
    email: '',
    cpf: '',
    education: '',
    pisPasep: '',
    birthDate: '',
    phone: '',
    genre: 0
  };

  async function createEmployee(employee: IEmployee) {
    setLoading(true);
    const response = await AdminRepository.registerEmployee(employee);
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
      <EmployeeForm
        user={defaultEmployee}
        action={createEmployee}
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
      </EmployeeForm>
    </Dashboard>
  );
}
export default RegisterEmployees;
