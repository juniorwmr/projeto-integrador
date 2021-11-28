import SignInForm from '../../../../components/SignInForm';
import AdminRepository from '../../../../repositories/admin';
import { useState } from 'react';
import Loader from 'react-loader-spinner';
import { useAuth } from '../../../../contexts/auth';
import { login } from '../../../../services/auth';
import { useHistory } from 'react-router';
import { toast } from 'react-toastify';

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
    const response = await AdminRepository.auth(data);
    if (response?.data?.accessToken) {
      setSigned(true);
      login(response?.data.accessToken, '@token/admin');
      history.push('/admin/dashboard');
    } else {
      toast.error('Dados incorretos, tente novamente!');
    }
    setLoading(false);
  }

  return (
    <SignInForm name="Administrador" data={defaultData} action={onSubmitHandle}>
      <button type="submit" disabled={loading}>
        {!loading ? (
          'Entrar'
        ) : (
          <Loader type="Puff" color="#cecece" height={40} width={40} />
        )}
      </button>
    </SignInForm>
  );
}
export default SignIn;
