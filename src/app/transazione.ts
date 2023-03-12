// {
//     "amount": 444.26,
//     "date": 1538472564,
//     "business": "Abshire and Sons",
//     "name": "Savings Account (...4885)",
//     "type": "invoice",
//     "account": "52870193"
// }

export interface ITransazione {
    "amount": number;
    "date": number;
    "business": string;
    "name": string;
    "type": string;
    "account": string;
}