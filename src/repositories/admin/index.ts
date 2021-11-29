import { api } from '../../services/api';
import { IEmployee } from '../employee';

const baseEndPoint = '/admin';

interface IUser {
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
}
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

export interface IContracts {
  id?: string;
  registration: string;
  admission: string;
  city: string;
  type: number;
  situation: number;
  contract: number;
  employee?: IEmployee;
  employeeId?: string;
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

  async registerContract(contract: IContracts) {
    console.log(contract);
    try {
      const response = await api.post<IContracts>(
        `${baseEndPoint}/contracts`,
        contract,
        {
          timeout: 5000
        }
      );
      return response;
    } catch (err) {
      console.error(`Your request (POST) to ${api} FAILED. \n\n` + err);
    }
  },

  async listEmployees() {
    try {
      const response = await api.get<IUser[]>(`${baseEndPoint}/employees`, {
        timeout: 5000
      });
      return response;
    } catch (err) {
      console.error(`Your request (GET) to ${api} FAILED. \n\n` + err);
    }
  },

  async find(query?: { id?: string; cpf?: string; email?: string }) {
    try {
      const response = await api.get<IUser>(`${baseEndPoint}`, {
        params: {
          query
        },
        timeout: 5000
      });
      return response;
    } catch (err) {
      console.error(`Your request (GET) to ${api} FAILED. \n\n` + err);
    }
  },
  async listContracts() {
    try {
      const response = await api.get<IContracts[]>(
        `${baseEndPoint}/contracts`,
        {
          timeout: 5000
        }
      );
      return response;
    } catch (err) {
      console.error(`Your request (GET) to ${api} FAILED. \n\n` + err);
    }
  }
};
