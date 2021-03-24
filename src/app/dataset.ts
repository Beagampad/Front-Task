export interface Dataset {

    name: string;
    category: string;
    tags: string;
    balance: number;
    available: number;
    id_dataset: number;
    details: {
        date: string,
        orderId: string,
        orderCode: string,
        type: string,
        credit: number,
        balance: number,
    }
}
