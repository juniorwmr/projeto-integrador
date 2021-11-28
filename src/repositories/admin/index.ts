import { api } from '../../services/api';
import { IEmployee } from '../employee';

const baseEndPoint = '/admin';

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
  },

  async registerEmployee(employee: IEmployee) {
    try {
      const response = await api.post<IAuthResponse>(
        `${baseEndPoint}/employees`,
        employee,
        {
          timeout: 5000
        }
      );
      return response;
    } catch (err) {
      console.error(`Your request (POST) to ${api} FAILED. \n\n` + err);
    }
  },

  async find(query?: { id?: string; cpf?: string; email?: string }) {
    try {
      const response = await api.get<IAuthResponse>(`${baseEndPoint}`, {
        params: {
          query
        },
        timeout: 5000
      });
      return response;
    } catch (err) {
      console.error(`Your request (GET) to ${api} FAILED. \n\n` + err);
    }
  }
};
