import CustomerTable from "../components/tables/CustomerTable";


export default function Customers() {
  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold text-white">
        Customer Management
      </h1>

      <CustomerTable />
    </div>
  );
}
