import React, { FormEvent, ReactNode, useState } from 'react';

import {
  Container,
  Main,
  Form,
  Fieldset,
  InputField,
  InputGroup,
  SelectField
} from './styles';

interface IUser {
  id: string;
  name: string;
  password?: string;
  email: string;
  cpf: string;
  education: string;
  pisPasep: string;
  birthDate: string;
  phone: string;
  active?: boolean;
  genre: number;
  contracts?: any;
  type?: string;
}

interface IUserFormProps {
  user: IUser;
  action: (data: IUser) => void;
  children: ReactNode;
  isEdit?: boolean;
}

const usersForm: React.FC<IUserFormProps> = ({
  user,
  action,
  children,
  isEdit = false
}) => {
  const [id, setId] = useState(user.id || '');
  const [name, setName] = useState(user.name || '');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState(user.email || '');
  const [cpf, setCPF] = useState(user.cpf || '');
  const [education, setEducation] = useState(user.education || '');
  const [pisPasep, setPisPasep] = useState(user.pisPasep || '');
  const [birthDate, setBirthDate] = useState(user.birthDate || '');
  const [phone, setPhone] = useState(user.phone || '');
  const [genre, setGenre] = useState(0);
  const genres = ['Masculino', 'Feminino', 'Outros'];

  function onSubmitForm(event: FormEvent) {
    event.preventDefault();
    action({
      id,
      name,
      password,
      email,
      cpf,
      education,
      pisPasep,
      birthDate,
      phone,
      genre
    });
  }

  return (
    <Container>
      <Main>
        <Form onSubmit={(event: FormEvent) => onSubmitForm(event)}>
          <Fieldset>
            <legend>Informações Principais</legend>
            <InputField>
              <label htmlFor="name">Nome</label>
              <input
                id="name"
                name="name"
                disabled={isEdit}
                onChange={e => setName(e.target.value)}
                value={name}
              />
            </InputField>
            <InputGroup>
              <InputField>
                <label htmlFor="email">E-mail</label>
                <input
                  id="email"
                  name="email"
                  onChange={e => setEmail(e.target.value)}
                  value={email}
                />
              </InputField>
              <InputField>
                <label htmlFor="birthDate">Data de nascimento</label>
                <input
                  id="birthDate"
                  type="date"
                  name="birthDate"
                  disabled={isEdit}
                  onChange={e => setBirthDate(e.target.value)}
                  value={birthDate}
                />
              </InputField>
            </InputGroup>
            <InputField>
              <label htmlFor="password">Senha</label>
              <input
                id="password"
                name="password"
                onChange={e => setPassword(e.target.value)}
                value={password}
              />
            </InputField>
            <InputGroup>
              <InputField>
                <label htmlFor="cpf">CPF</label>
                <input
                  id="cpf"
                  name="cpf"
                  disabled={isEdit}
                  onChange={e => setCPF(e.target.value)}
                  value={cpf}
                />
              </InputField>
              <InputField>
                <label htmlFor="education">Educação</label>
                <input
                  id="education"
                  name="education"
                  onChange={e => setEducation(e.target.value)}
                  value={education}
                />
              </InputField>
            </InputGroup>
            <InputGroup>
              <InputField>
                <label htmlFor="genre">Celular</label>
                <input
                  id="phone"
                  name="phone"
                  onChange={e => setPhone(e.target.value)}
                  value={phone}
                />
              </InputField>
              <SelectField>
                <label htmlFor="genre">Gênero</label>
                <select
                  required
                  value={genre}
                  name="genre"
                  onChange={e => setGenre(Number(e.target.value))}
                >
                  {genres.map((genre: string, index: number) => (
                    <option key={index + 1} value={index + 1}>
                      {genre}
                    </option>
                  ))}
                </select>
              </SelectField>
            </InputGroup>
            <InputField>
              <label htmlFor="pisPasep">PIS/PASEP</label>
              <input
                id="pisPasep"
                name="pisPasep"
                disabled={isEdit}
                onChange={e => setPisPasep(e.target.value)}
                value={pisPasep}
              />
            </InputField>
          </Fieldset>
          {children}
        </Form>
      </Main>
    </Container>
  );
};

export default usersForm;
