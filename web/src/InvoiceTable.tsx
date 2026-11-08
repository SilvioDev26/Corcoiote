import { InvoiceTableProps } from './invoice.ts';

import InvoiceRow from './InvoiceRow.tsx';

export default function InvoiceTable(props: InvoiceTableProps) {
  return <table>
    <thead>
      <tr>
        <th>Cliente</th>
        <th>Valor</th>
        <th>Emissão</th>
        <th>Vencimento</th>
        <th>Situação</th>
      </tr>
    </thead>
    <tbody>
      {props.datas.map((invoice) => <InvoiceRow
        key={invoice.id}
        data={invoice}
      />)}
    </tbody>
  </table>;
}