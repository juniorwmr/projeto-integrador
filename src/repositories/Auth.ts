import { api } from '../services/api';

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
  async authEmployee(user: IAuthUser) {
    console.log(user);
    try {
      const response = await api.post<IAuthResponse>('/employee/auth', user, {
        timeout: 5000
      });
      return response;
    } catch (err) {
      console.error(`Your request (POST) to ${api} FAILED. \n\n` + err);
    }
  },

  async authAdmin(user: IAuthUser) {
    console.log(user);
    try {
      const response = await api.post<IAuthResponse>('/admin/auth', user, {
        timeout: 5000
      });
      return response;
    } catch (err) {
      console.error(`Your request (POST) to ${api} FAILED. \n\n` + err);
    }
  }
};
