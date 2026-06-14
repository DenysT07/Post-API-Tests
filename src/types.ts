export type Client = {
  id: string;
  phone: string;
  lastName: string;
  firstName: string;
};

export type ClientInput = Omit<Client, 'id'>;
