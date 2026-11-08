import { Invoice } from './invoice.ts';

import InvoiceTable from './InvoiceTable.tsx';

const invoices: Invoice[] = [{
  id: 1,
  amount: 125037,
  status: 'paid',
  issueDate: '2026-09-15',
  dueDate: '2026-10-16',
  customer: {
    id: 2,
    name: 'Construtora Meridiano',
    email: 'comercial@meridiano.com.br'
  }
}, {
  id: 3,
  amount: 93750,
  status: 'pending',
  issueDate: '2026-10-01',
  dueDate: '2026-11-03',
  customer: {
    id: 5,
    name: 'Gráfica Nova Vida',
    email: 'grafica@novavida.com.br'
  }
}, {
  id: 4,
  amount: 1375336,
  status: 'pending',
  issueDate: '2026-10-10',
  dueDate: '2026-11-25',
  customer: {
    id: 3,
    name: 'Aly Som',
    email: 'cotato@alysom.com.br'
  }
}];

export default function App() {
  return <>
    <h1>Faturas</h1>

    <InvoiceTable datas={invoices} />
  </>;
}
