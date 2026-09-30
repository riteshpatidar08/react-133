import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CiSearch } from 'react-icons/ci';
import { FiUpload, FiDownload, FiPlus } from 'react-icons/fi';

function Customers() {
  const [search, setSearch] = useState('');

  const customers = [
    {
      id: 1,
      name: 'Amit Vaishnav',
      email: 'amitvaishnav@gmail.com',
      location: 'Jaipur',
      phone: '1234567890',
      date: '26-09-2026',
      avatar: 'AA',
    },
    {
      id: 2,
      name: 'Shubham Jangir',
      email: 'Shubham@gmail.com',
      location: 'Jaipur',
      phone: '2314567980',
      date: '26-09-2026',
      avatar: 'AA',
    },
    {
      id: 3,
      name: 'Virendra Jangir',
      email: 'virendra@gmail.com',
      location: 'Jaipur',
      phone: '1234098765',
      date: '26-09-2026',
      avatar: 'AA',
    },
    {
      id: 4,
      name: 'Nirmal Yadav',
      email: 'nirmal@gmail.com',
      location: 'Jaipur',
      phone: '8036476326',
      date: '26-09-2026',
      avatar: 'AA',
    },
  ];

  const filteredCustomers = customers.filter((customer) =>
    customer.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="customers-page">

      {/* TOP */}
      <div className="customers-header">
        <div>
          <h1>Customers</h1>

          <div className="customer-actions">
            <button>
              <FiUpload />
              Import
            </button>

            <button>
              <FiDownload />
              Export
            </button>
          </div>
        </div>

        <button className="add-btn">
          <FiPlus />
          Add
        </button>
      </div>

      {/* SEARCH */}
      <div className="customer-search-box">
        <CiSearch />
        <input
          type="text"
          placeholder="Search customer"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* TABLE */}
      <div className="customer-table-wrapper">
        <table className="customer-table">
          <thead>
            <tr>
              <th>
                <input type="checkbox" />
              </th>
              <th>Name</th>
              <th>Email</th>
              <th>Location</th>
              <th>Phone</th>
              <th>Signed Up</th>
            </tr>
          </thead>

          <tbody>
            {filteredCustomers.map((customer) => (
              <tr key={customer.id}>
                <td>
                  <input type="checkbox" />
                </td>

                <td>
                  <Link
                    to={`/dashboard/customers/${customer.id}`}
                    className="customer-name"
                  >
                    <div className="avatar">
                      {customer.avatar}
                    </div>

                    {customer.name}
                  </Link>
                </td>

                <td>{customer.email}</td>
                <td>{customer.location}</td>
                <td>{customer.phone}</td>
                <td>{customer.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}

export default Customers;