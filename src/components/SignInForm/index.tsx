import { useState } from 'react';
import { MdAlternateEmail, MdLockOutline } from 'react-icons/md';
import { HiEye, HiOutlineEyeOff } from 'react-icons/hi';
import { Container } from './styles';

type IDataForm = {
  cpf: string;
  password: string;
};

interface ISignInFormProps {
  name: string;
  data: IDataForm;
  action: (data: IDataForm) => void;
  children: React.ReactNode;
}

function SignInForm({ name, data, action, children }: ISignInFormProps) {
  const [cpf, setCPF] = useState(data.cpf);
  const [password, setPassword] = useState(data.password);
  const [show, setShow] = useState(false);

  function onSubmitForm(event: React.FormEvent) {
    event.preventDefault();
    const data = {
      cpf,
      password
    };
    action(data);
  }

  return (
    <Container>
      <form className="login-center" onSubmit={event => onSubmitForm(event)}>
        <img
          className="displayed"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Bras%C3%A3o_do_Acre.svg/800px-Bras%C3%A3o_do_Acre.svg.png"
          alt=""
          width="100"
          height="100"
        />
        <h1>Login - {name}</h1>

        <div className="login-ImputCPF">
          <MdAlternateEmail />
          <input
            type="text"
            placeholder="CPF"
            value={cpf}
            onChange={e => setCPF(e.target.value)}
          />
        </div>

        <div className="login-InputPassword">
          <MdLockOutline />
          <input
            placeholder="Senha"
            type={show ? 'text' : 'password'}
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <div className="login-eye">
            {show ? (
              <HiEye size={20} onClick={() => setShow(!show)} />
            ) : (
              <HiOutlineEyeOff size={20} onClick={() => setShow(!show)} />
            )}
          </div>
        </div>
        {children}
      </form>
    </Container>
  );
}

export default SignInForm;
