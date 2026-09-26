import { Search, X } from "lucide-react";
import { useState, useEffect } from "react";

const customersData = [
  {
    id: 1,
    name: "Virendra Jangir",
    email: "virendra@gmail.com",
    location: "Jaipur, Rajasthan",
    status: "Active",
  },
  {
    id: 2,
    name: "Rahul Sharma",
    email: "rahul@gmail.com",
    location: "Delhi, India",
    status: "Active",
  },
  {
    id: 3,
    name: "Amit Kumar",
    email: "amit@gmail.com",
    location: "Mumbai, India",
    status: "Inactive",
  },
  {
    id: 4,
    name: "Priya Singh",
    email: "priya@gmail.com",
    location: "Lucknow, India",
    status: "Active",
  },
  {
    id: 5,
    name: "Neha Verma",
    email: "neha@gmail.com",
    location: "Kota, Rajasthan",
    status: "Active",
  },
];

function Customers() {
  const [customers, setCustomers] = useState(() => {
    const savedCustomers = localStorage.getItem("customers");

    return savedCustomers
      ? JSON.parse(savedCustomers)
      : customersData;
  });

  useEffect(() => {
    localStorage.setItem(
      "customers",
      JSON.stringify(customers)
    );
  }, [customers]);

  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [editingCustomer, setEditingCustomer] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    location: "",
    status: "Active",
  });

  // Input change
  function handleChange(e) {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  // Open Add Modal
  function handleOpenAdd() {
    setEditingCustomer(null);

    setFormData({
      name: "",
      email: "",
      location: "",
      status: "Active",
    });

    setShowModal(true);
  }

  // Open Edit Modal
  function handleEdit(customer) {
    setEditingCustomer(customer);

    setFormData({
      name: customer.name,
      email: customer.email,
      location: customer.location,
      status: customer.status,
    });

    setShowModal(true);
  }

  // Add / Update
  function handleSubmit(e) {
    e.preventDefault();

    if (editingCustomer) {
      setCustomers(
        customers.map((customer) =>
          customer.id === editingCustomer.id
            ? {
                ...customer,
                name: formData.name,
                email: formData.email,
                location: formData.location,
                status: formData.status,
              }
            : customer
        )
      );
    } else {
      const newCustomer = {
        id: Date.now(),
        name: formData.name,
        email: formData.email,
        location: formData.location,
        status: formData.status,
      };

      setCustomers([
        ...customers,
        newCustomer,
      ]);
    }

    closeModal();
  }

  // Delete
  function handleDelete(id) {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this customer?"
    );

    if (!confirmDelete) {
      return;
    }

    setCustomers(
      customers.filter(
        (customer) => customer.id !== id
      )
    );
  }

  // Close modal
  function closeModal() {
    setShowModal(false);
    setEditingCustomer(null);

    setFormData({
      name: "",
      email: "",
      location: "",
      status: "Active",
    });
  }

  // Search
  const filteredCustomers = customers.filter(
    (customer) =>
      customer.name
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      customer.email
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  return (
    <div className="w-full min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">

      {/* HEADER */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">

        <div>
          <h1 className="text-2xl font-bold tracking-tight text-gray-900">
            Customers
          </h1>

          <p className="mt-1 text-sm text-gray-500">
            Manage your customers
          </p>
        </div>

        <button
          onClick={handleOpenAdd}
          className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-black text-white text-sm font-semibold hover:bg-gray-800 active:scale-95 transition-all shadow-sm"
        >
          <span className="text-lg leading-none">
            +
          </span>

          Add Customer
        </button>

      </div>


      {/* SEARCH */}
      <div className="w-full max-w-md mb-6">

        <div className="flex items-center gap-3 bg-white border border-gray-200 rounded-xl px-4 py-2.5 shadow-sm focus-within:border-gray-400 focus-within:ring-2 focus-within:ring-gray-100 transition">

          <Search
            size={20}
            className="text-gray-400 shrink-0"
          />

          <input
            type="text"
            placeholder="Search customers..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            className="w-full bg-transparent outline-none text-sm text-gray-700 placeholder:text-gray-400"
          />

        </div>

      </div>


      {/* TABLE */}
      <div className="w-full bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">

        {/* Responsive Table */}
        <div className="overflow-x-auto">

          <table className="w-full min-w-[800px]">

            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">

                <th className="px-6 py-4 text-left text-xs font-semibold tracking-wider text-gray-500">
                  NAME
                </th>

                <th className="px-6 py-4 text-left text-xs font-semibold tracking-wider text-gray-500">
                  EMAIL
                </th>

                <th className="px-6 py-4 text-left text-xs font-semibold tracking-wider text-gray-500">
                  LOCATION
                </th>

                <th className="px-6 py-4 text-left text-xs font-semibold tracking-wider text-gray-500">
                  STATUS
                </th>

                <th className="px-6 py-4 text-left text-xs font-semibold tracking-wider text-gray-500">
                  ACTION
                </th>

              </tr>
            </thead>

            <tbody className="divide-y divide-gray-100">

              {filteredCustomers.map(
                (customer) => (

                  <tr
                    key={customer.id}
                    className="hover:bg-gray-50 transition-colors"
                  >

                    {/* NAME */}
                    <td className="px-6 py-4">

                      <div className="flex items-center gap-3">

                        <div className="w-10 h-10 rounded-full bg-gray-900 text-white flex items-center justify-center text-sm font-semibold shrink-0">
                          {customer.name.charAt(0)}
                        </div>

                        <span className="text-sm font-semibold text-gray-900">
                          {customer.name}
                        </span>

                      </div>

                    </td>

                    {/* EMAIL */}
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {customer.email}
                    </td>

                    {/* LOCATION */}
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {customer.location}
                    </td>

                    {/* STATUS */}
                    <td className="px-6 py-4">

                      <span
                        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold ${
                          customer.status === "Active"
                            ? "bg-emerald-50 text-emerald-700"
                            : "bg-gray-100 text-gray-500"
                        }`}
                      >

                        <span
                          className={`w-1.5 h-1.5 rounded-full ${
                            customer.status === "Active"
                              ? "bg-emerald-500"
                              : "bg-gray-400"
                          }`}
                        ></span>

                        {customer.status}

                      </span>

                    </td>

                    {/* ACTION */}
                    <td className="px-6 py-4">

                      <div className="flex items-center gap-2">

                        <button
                          onClick={() =>
                            handleEdit(customer)
                          }
                          className="px-3 py-1.5 rounded-lg text-sm font-medium text-blue-600 hover:bg-blue-50 transition"
                        >
                          Edit
                        </button>

                        <button
                          onClick={() =>
                            handleDelete(customer.id)
                          }
                          className="px-3 py-1.5 rounded-lg text-sm font-medium text-red-600 hover:bg-red-50 transition"
                        >
                          Delete
                        </button>

                      </div>

                    </td>

                  </tr>

                )
              )}

            </tbody>

          </table>

        </div>


        {/* No Customers */}
        {filteredCustomers.length === 0 && (
          <div className="flex flex-col items-center justify-center py-16">

            <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-3">
              <Search
                size={20}
                className="text-gray-400"
              />
            </div>

            <p className="text-sm font-medium text-gray-700">
              No customers found
            </p>

            <p className="text-xs text-gray-400 mt-1">
              Try searching with a different name or email.
            </p>

          </div>
        )}

      </div>


      {/* MODAL */}
      {showModal && (

        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">

          <div className="w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">

            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-gray-200">

              <div>
                <h2 className="text-lg font-semibold text-gray-900">
                  {editingCustomer
                    ? "Edit Customer"
                    : "Add Customer"}
                </h2>

                <p className="text-sm text-gray-500 mt-1">
                  {editingCustomer
                    ? "Update customer information"
                    : "Add a new customer"}
                </p>
              </div>

              <button
                onClick={closeModal}
                className="w-9 h-9 flex items-center justify-center rounded-lg text-gray-500 hover:bg-gray-100 hover:text-gray-900 transition"
              >
                <X size={20} />
              </button>

            </div>


            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="p-6 space-y-5"
            >

              {/* NAME */}
              <div>

                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>

                <input
                  type="text"
                  name="name"
                  placeholder="Enter customer name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-sm text-gray-800 outline-none focus:bg-white focus:border-black focus:ring-2 focus:ring-gray-100 transition"
                />

              </div>


              {/* EMAIL */}
              <div>

                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-sm text-gray-800 outline-none focus:bg-white focus:border-black focus:ring-2 focus:ring-gray-100 transition"
                />

              </div>


              {/* LOCATION */}
              <div>

                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Location
                </label>

                <input
                  type="text"
                  name="location"
                  placeholder="Enter location"
                  value={formData.location}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-sm text-gray-800 outline-none focus:bg-white focus:border-black focus:ring-2 focus:ring-gray-100 transition"
                />

              </div>


              {/* STATUS */}
              <div>

                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Status
                </label>

                <select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-sm text-gray-800 outline-none focus:bg-white focus:border-black focus:ring-2 focus:ring-gray-100 transition"
                >

                  <option value="Active">
                    Active
                  </option>

                  <option value="Inactive">
                    Inactive
                  </option>

                </select>

              </div>


              {/* BUTTONS */}
              <div className="flex justify-end gap-3 pt-4 border-t border-gray-100">

                <button
                  type="button"
                  onClick={closeModal}
                  className="px-4 py-2.5 rounded-xl border border-gray-200 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl bg-black text-white text-sm font-semibold hover:bg-gray-800 active:scale-95 transition-all shadow-sm"
                >
                  {editingCustomer
                    ? "Update Customer"
                    : "Add Customer"}
                </button>

              </div>

            </form>

          </div>

        </div>

      )}

    </div>
  );
}

export default Customers;