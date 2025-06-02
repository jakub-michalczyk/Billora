export interface ICompanyDataDTO {
    name: string;
    address: string;
    phones: string[]
}

export type ICompanyData = Pick<ICompanyDataDTO, 'name' | 'address'> & {
    phones: string;
};

export interface IInvoiceItem {
    name: string;
    count: number;
    price: number;
}