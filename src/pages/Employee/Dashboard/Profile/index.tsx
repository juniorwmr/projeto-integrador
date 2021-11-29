import { useEffect, useState } from 'react';
import { FiCheck } from 'react-icons/fi';
import Loader from 'react-loader-spinner';
import { useHistory } from 'react-router';
import { toast } from 'react-toastify';
import Dashboard from '../../../../components/Dashboard/Employee';
import EmployeeForm from '../../../../components/EmployeeForm';
import AdminRepository from '../../../../repositories/admin';
import { useLoadingContext } from '../../../../hooks/useLoading';
import EmployeeRepository, {
  IEmployee
} from '../../../../repositories/employee';

import { ContainerButtons, ConfirmButton } from './styles';

function EmployeeProfile() {
  const history = useHistory();
  const { handleLoading } = useLoadingContext();
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState();

  useEffect(() => {
    handleLoading(true);
    EmployeeRepository.find().then(res => {
      setUser(res?.data as any);
    });
    handleLoading(false);
  }, []);

  async function editProfile(employee: IEmployee) {
    setLoading(true);
    const response = await AdminRepository.registerEmployee(employee);
    if (response?.status === 201) {
      toast.success('Editado com sucesso!');
      history.push('/employee/dashboard');
    } else {
      toast.error('Não foi possível editar, tente novamente!');
    }
    setLoading(false);
  }

  return (
    <Dashboard title="Editar Perfil" isProfilePage={true}>
      {user && (
        <EmployeeForm user={user} action={editProfile} isEdit={true}>
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
      )}
    </Dashboard>
  );
}
export default EmployeeProfile;
