import { api } from '../../services/api';

const baseEndPoint = '/employee';

interface IAuthResponse {
  user: {
    id: string;
    name: string;
    email: string;
    cpf: string;
    education: string;
    pisPasep: string;
    birthDate: string;
    phone: string;
    active: boolean;
    genre: number;
  };
  accessToken: string;
}

interface IAuthUser {
  cpf: string;
  password: string;
}

export default {
  async auth(user: IAuthUser) {
    try {
      const response = await api.post<IAuthResponse>(
        `${baseEndPoint}/auth`,
        user,
        {
          timeout: 5000
        }
      );
      return response;
    } catch (err) {
      console.error(`Your request (POST) to ${api} FAILED. \n\n` + err);
    }
  }
};
