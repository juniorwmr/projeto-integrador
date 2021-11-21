import SignInForm from '../../../../components/SignInForm';

type IDataForm = {
  cpf: string;
  password: string;
};

const defaultData: IDataForm = {
  cpf: '',
  password: ''
};

function SignIn() {
  function onSubmitHandle(data: IDataForm) {
    console.log(data);
  }

  return (
    <SignInForm name="Funcionário" data={defaultData} action={onSubmitHandle}>
      <button type="submit">Entrar</button>
    </SignInForm>
  );
}
export default SignIn;
