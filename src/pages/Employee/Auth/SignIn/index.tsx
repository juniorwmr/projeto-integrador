import SignInForm from '../../../../components/SignInForm';
import EmployeeRepository from '../../../../repositories/employee';
import { useState } from 'react';
import Loader from 'react-loader-spinner';
import { useAuth } from '../../../../contexts/auth';
import { login } from '../../../../services/auth';
import { useHistory } from 'react-router';
import { toast } from 'react-toastify';
import { PrivateAreaBtn } from './styles';

type IDataForm = {
  cpf: string;
  password: string;
};

const defaultData: IDataForm = {
  cpf: '',
  password: ''
};

function SignIn() {
  const { setSigned } = useAuth();
  const history = useHistory();
  const [loading, setLoading] = useState(false);

  async function onSubmitHandle(data: IDataForm) {
    setLoading(true);
    const response = await EmployeeRepository.auth(data);
    if (response?.data?.accessToken) {
      setSigned(true);
      login(response?.data.accessToken, '@token/employee');
      history.push('/employee/dashboard');
    } else {
      toast.error('Dados incorretos, tente novamente!');
    }
    setLoading(false);
  }

  return (
    <>
      <PrivateAreaBtn to="/admin/signin" className="btn-signin">
        Acesso restrito
      </PrivateAreaBtn>
      <SignInForm name="Funcionário" data={defaultData} action={onSubmitHandle}>
        <button type="submit" disabled={loading}>
          {!loading ? (
            'Entrar'
          ) : (
            <Loader type="Puff" color="#cecece" height={40} width={40} />
          )}
        </button>
      </SignInForm>
    </>
  );
}
export default SignIn;
