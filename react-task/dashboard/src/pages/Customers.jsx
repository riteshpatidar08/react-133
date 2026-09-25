import { Search, X } from "lucide-react";
import { useState ,useEffect} from "react";

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

  // null = Add mode
  // customer object = Edit mode
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
      // UPDATE CUSTOMER

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
      // ADD CUSTOMER

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
    <div className="customers-page">

      {/* HEADER */}

      <div className="customers-header">
        <div>
          <h1>Customers</h1>
          <p>Manage your customers</p>
        </div>

        <button
          className="add-customer-btn"
          onClick={handleOpenAdd}
        >
          + Add Customer
        </button>
      </div>


      {/* SEARCH */}

      <div className="customer-search">

        <Search size={20} />

        <input
          type="text"
          placeholder="Search customers..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />

      </div>


      {/* TABLE */}

      <div className="customers-table-card">

        <table>

          <thead>
            <tr>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>LOCATION</th>
              <th>STATUS</th>
              <th>ACTION</th>
            </tr>
          </thead>

          <tbody>

            {filteredCustomers.map(
              (customer) => (

                <tr key={customer.id}>

                  <td>
                    <div className="customer-name">

                      <div className="customer-avatar">
                        {customer.name.charAt(0)}
                      </div>

                      <span>
                        {customer.name}
                      </span>

                    </div>
                  </td>

                  <td>
                    {customer.email}
                  </td>

                  <td>
                    {customer.location}
                  </td>

                  <td>

                    <span
                      className={
                        customer.status ===
                        "Active"
                          ? "status active"
                          : "status inactive"
                      }
                    >
                      {customer.status}
                    </span>

                  </td>

                  <td>

                    <button
                      className="action-btn"
                      onClick={() =>
                        handleEdit(customer)
                      }
                    >
                      Edit
                    </button>

                    <button
                      className="delete-btn"
                      onClick={() =>
                        handleDelete(customer.id)
                      }
                    >
                      Delete
                    </button>

                  </td>

                </tr>

              )
            )}

          </tbody>

        </table>


        {filteredCustomers.length === 0 && (
          <div className="no-customers">
            No customers found
          </div>
        )}

      </div>


      {/* MODAL */}

      {showModal && (

        <div className="modal-overlay">

          <div className="customer-modal">

            <div className="modal-header">

              <h2>
                {editingCustomer
                  ? "Edit Customer"
                  : "Add Customer"}
              </h2>

              <button
                className="close-modal"
                onClick={closeModal}
              >
                <X size={20} />
              </button>

            </div>


            <form
              onSubmit={handleSubmit}
              className="customer-form"
            >

              {/* NAME */}

              <div className="form-group">

                <label>Name</label>

                <input
                  type="text"
                  name="name"
                  placeholder="Enter customer name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />

              </div>


              {/* EMAIL */}

              <div className="form-group">

                <label>Email</label>

                <input
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />

              </div>


              {/* LOCATION */}

              <div className="form-group">

                <label>Location</label>

                <input
                  type="text"
                  name="location"
                  placeholder="Enter location"
                  value={formData.location}
                  onChange={handleChange}
                  required
                />

              </div>


              {/* STATUS */}

              <div className="form-group">

                <label>Status</label>

                <select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
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

              <div className="form-buttons">

                <button
                  type="button"
                  className="cancel-btn"
                  onClick={closeModal}
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="save-btn"
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